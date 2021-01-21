import React from "react";
import Header from "./Header";

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
    return (
      <div className="favourites">
        <Header title="Vinyl Directory" />
        <h2>Favourites</h2>
        <ul className="favourites">{favIds.map(this.renderFavourite)}</ul>
      </div>
    );
  }
}

export default Favourites;
