import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import MarkerWithInfoWindow from "./MarkerWithInfoWindow";
import { GoogleMap, LoadScript, MarkerClusterer } from "@react-google-maps/api";

const mapContainerStyle = {
  height: "400px",
  width: "800px",
};

const options = {
  imagePath:
    "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
};

function createKey(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

class StoreMap extends React.Component {
  state = {
    region: "All",
    center: { lat: -41.2932786, lng: 174.7837615 },
    zoom: 5,
  };
  regions = [
    {
      All: {
        lat: -41.3562773,
        lng: 174.4775412,
      },
      Northland: {
        lat: -35.4627936,
        lng: 173.8409633,
      },
      Auckland: {
        lat: -36.8621432,
        lng: 174.5846066,
      },
      CentralNorth: {
        lat: -39.2791262,
        lng: 175.9277365,
      },
      Wellington: {
        lat: -41.2442196,
        lng: 174.6916437,
      },
      SouthIsland: {
        lat: -43.3372441,
        lng: 170.0830099,
      },
    },
  ];
  goToDashboard = (event) => {
    this.props.history.push(`/dashboard`);
  };
  goToList = (event) => {
    this.props.history.push(`/list`);
  };
  goToFavourites = (event) => {
    this.props.history.push(`/favourites`);
  };

  handleOnLoad = (map) => {
    const controlButtonDiv = document.createElement("div");
    ReactDOM.render(
      <select onChange={this.handleChange} value={this.state.value}>
        <option value="All">All Regions</option>
        <option value="Northland">Northland</option>
        <option value="Auckland">Auckland</option>
        <option value="CentralNorth">Central North Island</option>
        <option value="Wellington">Wellington</option>
        <option value="SouthIsland">South Island</option>
      </select>,
      controlButtonDiv
    );
    map.controls[window.google.maps.ControlPosition.TOP_RIGHT].push(
      controlButtonDiv
    );
  };

  handleChange = (e) => {
    const region = e.target.value;
    this.setState({ region: region }, this.updateRegion(region));
  };

  updateRegion = (region) => {
    if (region === "All") {
      this.setState({ zoom: 5 });
      this.setState({ center: this.regions[0].All });
    } else if (region === "Northland") {
      this.setState({ zoom: 7 });
      this.setState({ center: this.regions[0].Northland });
    } else if (region === "Auckland") {
      this.setState({ zoom: 7 });
      this.setState({ center: this.regions[0].Auckland });
    } else if (region === "CentralNorth") {
      this.setState({ zoom: 7 });
      this.setState({ center: this.regions[0].CentralNorth });
    } else if (region === "Wellington") {
      this.setState({ zoom: 7 });
      this.setState({ center: this.regions[0].Wellington });
    } else if (region === "SouthIsland") {
      this.setState({ zoom: 6 });
      this.setState({ center: this.regions[0].SouthIsland });
    }
  };

  render() {
    const stores = [];
    return (
      <div className="store-map">
        <Header title="Vinyl Directory" />
        <h2>Store Map</h2>
        <button onClick={this.goToList}>Go to store list</button>
        <button onClick={this.goToFavourites}>Go to favourites</button>
        {Object.keys(this.props.stores).forEach((key) => {
          const obj = {
            name: this.props.stores[key].name,
            address1: this.props.stores[key].address1,
            address2: this.props.stores[key].address2,
            address3: this.props.stores[key].address3,
            phone: this.props.stores[key].phone,
            url: this.props.stores[key].url,
            image: this.props.stores[key].image,
            location: {
              lat: this.props.stores[key].lat,
              lng: this.props.stores[key].lng,
            },
          };
          stores.push(obj);
        })}
        <LoadScript googleMapsApiKey={process.env.REACT_APP_MAP_KEY}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={this.state.zoom}
            center={this.state.center}
            onLoad={(map) => this.handleOnLoad(map)}
          >
            <MarkerClusterer options={options}>
              {(clusterer) =>
                stores.map((store) => (
                  <MarkerWithInfoWindow
                    key={createKey(10)}
                    clusterer={clusterer}
                    position={store.location}
                    name={store.name}
                    address1={store.address1}
                    address2={store.address2}
                    address3={store.address3}
                    phone={store.phone}
                    url={store.url}
                    image={store.image}
                    setOpenWindow={this.setOpenWindow}
                    isOpen={this.state.isOpen}
                  />
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
