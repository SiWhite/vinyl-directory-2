import React from "react";

const handleChange = () => {
  console.log("update region");
};

const MapControl = (props) => (
  <select onChange={handleChange}>
    <option value="Select">Select Region</option>
    <option value="Auckland">Auckland</option>
    <option value="Auckland">Wellington</option>
    <option value="Auckland">Christchurch</option>
  </select>
);

export default MapControl;
