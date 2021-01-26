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
    const allStores = document.getElementsByTagName("li");
    const northlandStores = document.querySelectorAll("li[data-region='Northland']");
    const aucklandStores = document.querySelectorAll("li[data-region='Auckland']");
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
      
    } else if (region === "Wellington") {
      
    } else if (region === "SouthIsland") {
     
    }

    setTimeout(
      () => this.reloadCss(), 
      3000
    );
  };

  reloadCss = () => {
    const links = document.getElementsByTagName("link");

    for (var x in links) {
        var link = links[x];

        if (link.getAttribute("type").indexOf("css") > -1) {
            link.href = link.href + "?id=" + new Date().getMilliseconds();
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
