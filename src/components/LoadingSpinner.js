import React from "react";
import "../css/spinner.css";

const LoadingSpinner = () => (
  <div className="spinner-container" role="status" aria-label="Loading">
    <div className="loading-spinner"></div>
  </div>
);

export default LoadingSpinner;