import React from "react";
import Header from "./Header";

class StoreList extends React.Component {
  handleClick = (event) => {
    this.props.history.push(`/inventory`);
  };

  render() {
    return (
      <div className="store-list">
        <Header title="Vinyl Directory" />
        <p>Store list here</p>
        {/* <button onClick={this.handleClick}>Log in to dashboard</button> */}
      </div>
    );
  }
}

export default StoreList;
