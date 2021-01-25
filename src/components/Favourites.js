import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import Adverts from "./Adverts";
import Footer from "./Footer";

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
      <li key={key} index={key}>
        <img src={fav.image} alt={fav.name} />
        <h3 className="store__name">{fav.name}</h3>
        <address>
          {fav.address1}
          <br />
          {fav.address2}
          <br />
          {fav.address3}
        </address>
        <br />
        <a href={fav.url}>Visit website</a>
        <button
          onClick={() => {
            this.props.deleteFavourite(key);
          }}
        >
          Delete from favourites
        </button>
      </li>
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
          {hasFavs ? <ul className="favourites">{favIds.map(this.renderFavourite)}</ul> : <p>You haven't added any favourites yet. Try adding some from the <a onClick={this.goToList}>list of stores</a>.</p>}
        </div>
        <Adverts />
        <Footer />
      </div>
    );
  }
}

export default Favourites;
