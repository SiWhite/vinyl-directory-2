import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import Store from "./Store";
import Footer from "./Footer";

class StoreList extends React.Component {

  render() {
    return (
      <div className="container">
      <div className="store-list">
        <Header title="Vinyl Directory" />
        <Intro insideList={true} />
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
      </div>
      <Footer />
      </div>
    );
  }
}

export default StoreList;
