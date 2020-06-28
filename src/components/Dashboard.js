import React from "react";
import AddStoreForm from "./AddStoreForm";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <h2>Dashboard</h2>
        <AddStoreForm addStore={this.props.addStore} />
      </div>
    );
  }
}

export default Dashboard;
