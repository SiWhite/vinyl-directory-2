import React from "react";
import Header from "./Header";

class StoreMap extends React.Component {
  goToDashboard = (event) => {
    this.props.history.push(`/dashboard`);
  };
  goToList = (event) => {
    this.props.history.push(`/list`);
  };
  goToFavourites = (event) => {
    this.props.history.push(`/favourites`);
  };

  render() {
    return (
      <div className="store-map">
        <Header title="Vinyl Directory" />
        <h2>Store Map</h2>
        {/* <ul className="stores">
          {Object.keys(this.props.stores).map((key) => (
            <Store
              key={key}
              index={key}
              details={this.props.stores[key]}
              addToFavourites={this.props.addToFavourites}
            />
          ))}
        </ul> */}
        <button onClick={this.goToList}>Go to store list</button>
        <button onClick={this.goToDashboard}>Go to dashboard</button>
        <button onClick={this.goToFavourites}>Go to favourites</button>
      </div>
    );
  }
}

export default StoreMap;
