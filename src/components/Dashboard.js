import React from "react";
import Header from "./Header";
import AddStoreForm from "./AddStoreForm";
import EditStoreForm from "./EditStoreForm";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <Header title="Vinyl Directory" />
        <h2>Dashboard</h2>
        {Object.keys(this.props.stores).map((key) => (
          <EditStoreForm
            key={key}
            index={key}
            store={this.props.stores[key]}
            updateStore={this.props.updateStore}
            deleteStore={this.props.deleteStore}
          />
        ))}
        <AddStoreForm addStore={this.props.addStore} />
        <button onClick={this.props.loadStoresFromFile}>
          Load stores from file
        </button>
      </div>
    );
  }
}

export default Dashboard;
