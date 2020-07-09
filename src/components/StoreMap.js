import React from "react";
import Header from "./Header";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

class StoreMap extends React.Component {
  state = {
    show: false,
  };
  _onChildClick = (key, childProps) => {
    this.setState({ show: !this.state.show });
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

  render() {
    return (
      <div className="store-map">
        <Header title="Vinyl Directory" />
        <h2>Store Map</h2>
        <button onClick={this.goToList}>Go to store list</button>
        <button onClick={this.goToDashboard}>Go to dashboard</button>
        <button onClick={this.goToFavourites}>Go to favourites</button>

        <div style={{ height: "50vh", width: "50vw" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
            defaultCenter={{
              lat: -41.2932786,
              lng: 174.7837615,
            }}
            defaultZoom={5}
            onChildClick={this._onChildClick}
          >
            {Object.keys(this.props.stores).map((key) => {
              return (
                <Marker
                  key={key}
                  index={key}
                  details={this.props.stores[key]}
                  lat={this.props.stores[key].lat}
                  lng={this.props.stores[key].lng}
                  show={this.state.show}
                />
              );
            })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default StoreMap;
