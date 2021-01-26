import React from "react";
import Header from "./Header";
import AddStoreForm from "./AddStoreForm";
import EditStoreForm from "./EditStoreForm";
import Login from "./Login";

class Dashboard extends React.Component {
  render() {
    const logout = <button className="btn-logout" onClick={this.props.logout}>Log out</button>;
    if (!this.props.uid) {
      return <Login authenticate={this.props.authenticate} />;
    }
    if (this.props.uid !== this.props.owner) {
      return (
        <div className="dashboard">
          <h1>Sorry you are not authorised to view this page</h1>
          {logout}
        </div>
      );
    }
    return (
      <div className="container">
        <div className="dashboard col-sm-12">
          <Header title="Vinyl Directory" />
          <h2>Dashboard</h2>
          {logout}
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
      </div>
    );
  }
}

export default Dashboard;
