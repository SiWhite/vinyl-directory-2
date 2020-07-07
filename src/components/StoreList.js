import React from "react";
import Header from "./Header";
import Store from "./Store";

class StoreList extends React.Component {
  goToDashboard = (event) => {
    this.props.history.push(`/dashboard`);
  };
  goToMap = (event) => {
    this.props.history.push(`/`);
  };
  goToFavourites = (event) => {
    this.props.history.push(`/favourites`);
  };

  render() {
    return (
      <div className="store-list">
        <Header title="Vinyl Directory" />
        <h2>Store List</h2>
        <ul className="stores">
          {Object.keys(this.props.stores).map((key) => (
            <Store
              key={key}
              index={key}
              details={this.props.stores[key]}
              addToFavourites={this.props.addToFavourites}
            />
          ))}
        </ul>
        <button onClick={this.goToMap}>Go to store map</button>
        <button onClick={this.goToDashboard}>Go to dashboard</button>
        <button onClick={this.goToFavourites}>Go to favourites</button>
      </div>
    );
  }
}

export default StoreList;
