import React from "react";

const Marker = (props) => (
  <React.Fragment>
    <div
      style={{
        border: "5px solid white",
        borderRadius: 20,
        height: 20,
        width: 20,
      }}
    >
      {props.show && (
        <div
          style={{
            width: 100,
            height: 100,
          }}
        >
          Info window
        </div>
      )}
    </div>
  </React.Fragment>
);

export default Marker;
