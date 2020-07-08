import React from "react";
import Header from "./Header";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

const mapStyles = {
  width: "50%",
  height: "50%",
};

const locations = [
  {
    name: "Rough Peel Music",
    location: {
      lat: -41.2940644,
      lng: 174.7752671,
    },
  },
];

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
          zoom={5}
          style={mapStyles}
          initialCenter={{
            lat: -41.2932786,
            lng: 174.7837615,
          }}
        >
          {locations.map((item) => {
            return <Marker key={item.name} position={item.location} />;
          })}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC305hFfwxNiq1CZavOBfLTJxyMtVlMrYA",
})(StoreMap);
