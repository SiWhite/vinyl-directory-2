import React, { useState, useCallback } from "react";
import { Marker, InfoWindow } from "@react-google-maps/api";
import icon from '../assets/icon.png';

const createKey = (length) => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const MarkerWithInfoWindow = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleToggleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <Marker
      className="marker"
      id={createKey(10)}
      position={props.position}
      clusterer={props.clusterer}
      name={props.name}
      image={props.image}
      openWindow={props.openWindow}
      onClick={handleToggleOpen}
      icon={{ url: icon }}
    >
      {isOpen && (
        <InfoWindow
          onCloseClick={handleToggleClose}
          optimized={false}
          zIndex={99999999}
        >
          <div className="info-window">
            <h2>{props.name}</h2>
            <address>
              {props.address1}
              <br />
              {props.address2}
              <br />
              {props.address3}
              <br />
            </address>
            {props.phone && (
              <a className="phone-link" href={"tel:" + props.phone}>
                {props.phone}
              </a>
            )}
            <br />
            {props.url && (
              <a
                href={props.url}
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
};

export default MarkerWithInfoWindow;