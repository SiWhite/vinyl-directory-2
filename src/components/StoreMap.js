import React from "react";
import Header from "./Header";
import {
  GoogleMap,
  LoadScript,
  MarkerClusterer,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const mapContainerStyle = {
  height: "400px",
  width: "800px",
};

const center = { lat: -41.2932786, lng: 174.7837615 };

const options = {
  imagePath:
    "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
};

function createKey(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

class StoreMap extends React.Component {
  state = {
    openInfoWindowMarkerId: "",
  };
  goToDashboard = (event) => {
    this.props.history.push(`/dashboard`);
  };
  goToList = (event) => {
    this.props.history.push(`/list`);
  };
  goToFavourites = (event) => {
    this.props.history.push(`/favourites`);
  };
  handleToggleOpen = () => {
    this.setState({
      isOpen: true,
    });
  };

  handleToggleClose = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    const locations = [];
    return (
      <div className="store-map">
        <Header title="Vinyl Directory" />
        <h2>Store Map</h2>
        <button onClick={this.goToList}>Go to store list</button>
        <button onClick={this.goToDashboard}>Go to dashboard</button>
        <button onClick={this.goToFavourites}>Go to favourites</button>
        {Object.keys(this.props.stores).forEach((key) => {
          const obj = {
            lat: this.props.stores[key].lat,
            lng: this.props.stores[key].lng,
          };
          locations.push(obj);
        })}
        <LoadScript googleMapsApiKey={process.env.REACT_APP_MAP_KEY}>
          <GoogleMap
            id="marker-example"
            mapContainerStyle={mapContainerStyle}
            zoom={7}
            center={center}
          >
            <MarkerClusterer options={options}>
              {(clusterer) =>
                locations.map((location) => (
                  <Marker
                    key={createKey(10)}
                    id={createKey(10)}
                    position={location}
                    clusterer={clusterer}
                    onClick={() => this.handleToggleOpen()}
                  >
                    {this.state.isOpen && (
                      <InfoWindow onCloseClick={() => this.handleToggleClose()}>
                        <span>Something</span>
                      </InfoWindow>
                    )}
                  </Marker>
                ))
              }
            </MarkerClusterer>
          </GoogleMap>
        </LoadScript>
      </div>
    );
  }
}

export default StoreMap;
