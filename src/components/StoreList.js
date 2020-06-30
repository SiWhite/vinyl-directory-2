import React from "react";
import Header from "./Header";
import Store from "./Store";

class StoreList extends React.Component {
  goToDashboard = (event) => {
    this.props.history.push(`/dashboard`);
  };

  render() {
    return (
      <div className="store-list">
        <Header title="Vinyl Directory" />
        <ul className="stores">
          {Object.keys(this.props.stores).map((key) => (
            <Store key={key} details={this.props.stores[key]} />
          ))}
        </ul>
        <button onClick={this.goToDashboard}>Go to dashboard</button>
      </div>
    );
  }
}

export default StoreList;
