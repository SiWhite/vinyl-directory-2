import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import Store from "./Store";
import Adverts from "./Adverts";
import Footer from "./Footer";

class StoreList extends React.Component {

  state = {
    region: "All"
  };

  handleChange = (e) => {
    const region = e.target.value;
    this.setState({ region: region }, this.updateRegion(region));
  };

  updateRegion = (region) => {
    const allStores = document.getElementsByTagName("li"),
    northlandStores = document.querySelectorAll("li[data-region='Northland']"),
    aucklandStores = document.querySelectorAll("li[data-region='Auckland']"),
    centralNorthStores = document.querySelectorAll("li[data-region='Central North Island']"),
    wellingtonStores = document.querySelectorAll("li[data-region='Wellington']"),
    southIslandStores = document.querySelectorAll("li[data-region='South Island']"),
    onlineOnlyStores = document.querySelectorAll("li[data-region='Online only']");
    for (var i = 0; i < allStores.length; i++) {
      allStores[i].style.display = "none";
    }
    if (region === "All") {
      for (var i = 0; i < allStores.length; i++) {
        allStores[i].style.display = "block";
      }
    } else if (region === "Northland") {
      for (var i = 0; i < northlandStores.length; i++) {
        northlandStores[i].style.display = "block";
      }
    } else if (region === "Auckland") {
      for (var i = 0; i < aucklandStores.length; i++) {
        aucklandStores[i].style.display = "block";
      }
    } else if (region === "CentralNorth") {
      for (var i = 0; i < centralNorthStores.length; i++) {
        centralNorthStores[i].style.display = "block";
      }  
    } else if (region === "Wellington") {
      for (var i = 0; i < wellingtonStores.length; i++) {
        wellingtonStores[i].style.display = "block";
      }  
    } else if (region === "SouthIsland") {
      for (var i = 0; i < southIslandStores.length; i++) {
        southIslandStores[i].style.display = "block";
      } 
    } else if (region === "OnlineOnly") {
      for (var i = 0; i < onlineOnlyStores.length; i++) {
        onlineOnlyStores[i].style.display = "block";
      } 
    }
  };

  render() {
    return (
      <div className="container">
      <div className="store-list">
        <Header title="Vinyl Directory" />
        <Intro insideList={true} />
        <div>
        <h2>Store List</h2>
        <div className="filter-container">
          <label htmlFor="list-filter">Filter by region: </label>
          <select className="region-selector" id="list-filter" onChange={this.handleChange} value={this.state.value}>
            <option value="All">All Regions</option>
            <option value="Northland">Northland</option>
            <option value="Auckland">Auckland</option>
            <option value="CentralNorth">Central North Island</option>
            <option value="Wellington">Wellington</option>
            <option value="SouthIsland">South Island</option>
            <option value="OnlineOnly">Online Only</option>
          </select>
        </div>
      </div>
        <ul className="stores">
          {Object.keys(this.props.stores).map((key) => (
            <Store
              key={key}
              index={key}
              details={this.props.stores[key]}
              addToFavourites={this.props.addToFavourites}
              favourites={this.props.favourites}
            />
          ))}
        </ul>
      </div>
      <Adverts />
      <Footer />
      </div>
    );
  }
}

export default StoreList;
