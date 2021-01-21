import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import Store from "./Store";
import Footer from "./Footer";

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
      <div className="container">
      <div className="store-list">
        <Header title="Vinyl Directory" />
        <Intro />
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
        <button onClick={this.goToFavourites}>Go to favourites</button>
      </div>
      <Footer />
      </div>
    );
  }
}

export default StoreList;
