import React from "react";
import Header from "./Header";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "50%",
  height: "50%",
};

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
        <button onClick={this.goToList}>Go to store list</button>
        <button onClick={this.goToDashboard}>Go to dashboard</button>
        <button onClick={this.goToFavourites}>Go to favourites</button>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: -1.2884,
            lng: 36.8233,
          }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC305hFfwxNiq1CZavOBfLTJxyMtVlMrYA",
})(StoreMap);
