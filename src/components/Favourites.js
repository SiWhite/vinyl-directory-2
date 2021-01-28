import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import Adverts from "./Adverts";
import Footer from "./Footer";
import Store from "./Store";

class Favourites extends React.Component {
  goToDashboard = (event) => {
    this.props.history.push(`/dashboard`);
  };
  goToMap = (event) => {
    this.props.history.push(`/`);
  };
  goToList = (event) => {
    this.props.history.push(`/list`);
  };
  renderFavourite = (key) => {
    const fav = this.props.stores[key];
    if (!fav) return null;
    return (
    <Store
      key={key}
      index={key}
      details={this.props.stores[key]}
      addToFavourites={this.props.addToFavourites}
      favourites={this.props.favourites}
      deleteFavourite={this.props.deleteFavourite}
    />
    );
  };
  render() {
    const favIds = Object.keys(this.props.favourites);
    const hasFavs = favIds.length > 0;
    console.log(hasFavs);
    return (
      <div className="container">
        <div className="favourites">
          <Header title="Vinyl Directory" />
          <Intro insideFavs={true} />
          <h2>Favourites</h2>
          {hasFavs ? <ul className="favourites">{favIds.map(this.renderFavourite)}</ul> : <p>You haven't added any favourites yet. Try adding some from the <a href="/list">list of stores</a>.</p>}
        </div>
        <Adverts />
        <Footer />
      </div>
    );
  }
}

export default Favourites;
