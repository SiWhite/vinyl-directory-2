import React from "react";
import { Marker, InfoWindow } from "@react-google-maps/api";

class MarkerWithInfoWindow extends React.Component {
  state = {
    isMounted: false,
    isOpen: false,
    openWindow: null,
  };
  componentDidMount() {
    this.setState({
      isMounted: true,
    });
  }
  handleToggleOpen = (marker) => {
    // this.closePreviousWindow();
    this.setState({ openWindow: marker });
    console.log("openWindow = ", this.state.openWindow.props.name);
    this.setState({
      isOpen: true,
    });
  };

  setOpenWindow = (marker) => {
    this.closePreviousWindow(marker);

    console.log(marker);
    console.log(this.state.openWindow);
    // if (marker.state.isMounted) {
    //   marker.props.isOpen = true;
    //   console.log(marker.props.isOpen);
    // }
  };
  closePreviousWindow = () => {
    // if (this.state.openWindow) {
    //   console.log("close ", this.state.openWindow.props.name);
    // }
  };

  handleToggleClose = () => {
    this.setState({
      isOpen: false,
    });
  };
  createKey(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  componentWillUnmount() {
    this.setState({
      isMounted: false,
    });
  }

  render() {
    return (
      <Marker
        id={this.createKey(10)}
        position={this.props.position}
        clusterer={this.props.clusterer}
        name={this.props.name}
        image={this.props.image}
        openWindow={this.props.openWindow}
        onClick={(e) => this.handleToggleOpen(this)}
      >
        {this.state.isOpen && (
          <InfoWindow
            onCloseClick={this.handleToggleClose}
            optimized={false}
            zIndex={99999999}
          >
            <div>
              {/* <img src={this.props.image} alt={this.props.name} /> */}
              <h2>{this.props.name}</h2>
              <address>
                {this.props.address1}
                <br></br>
                {this.props.address2}
                <br></br>
                {this.props.address3}
                <br></br>
              </address>
              {this.props.phone && (
                <a href={"tel:" + this.props.phone}>{this.props.phone}</a>
              )}
              <br></br>
              {this.props.url && (
                <a
                  href={this.props.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit website
                </a>
              )}
            </div>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}

export default MarkerWithInfoWindow;
