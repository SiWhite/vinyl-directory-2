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
        clusterer={this.props.clusterer}
        name={this.props.name}
      >
        {this.state.isOpen && (
          <InfoWindow onCloseClick={this.handleToggleClose}>
            <div>
              <h2>{this.props.name}</h2>
              <address>
                {this.props.address1}
                <br></br>
                {this.props.address2}
                <br></br>
                {this.props.address3}
                <br></br>
              </address>
              <a href={"tel:" + this.props.phone}>{this.props.phone}</a>{" "}
              <br></br>
              <a
                href={this.props.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit website
              </a>
            </div>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}

export default MarkerWithInfoWindow;
