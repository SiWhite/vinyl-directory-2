import React from "react";
import { Marker, InfoWindow } from "@react-google-maps/api";

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

class MarkerWithInfoWindow extends React.Component {
  state = {
    isOpen: false,
  };
  handleToggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  handleToggleClose = () => {
    this.setState({
      isOpen: false,
    });
  };
  render() {
    return (
      <Marker
        key={createKey(10)}
        id={createKey(10)}
        onClick={() => this.handleToggleOpen()}
        position={this.props.position}
      >
        {this.state.isOpen && (
          <InfoWindow onCloseClick={this.props.handleToggleClose}>
            <span>Something</span>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}

export default MarkerWithInfoWindow;
