import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import Store from "./Store";
import Adverts from "./Adverts";
import Footer from "./Footer";
import FeaturedStore from "./FeaturedStore";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
    for (var h = 0; h < allStores.length; h++) {
      allStores[h].style.display = "none";
    }
    if (region === "All") {
      for (var i = 0; i < allStores.length; i++) {
        allStores[i].style.display = "block";
      }
    } else if (region === "Northland") {
      for (var j = 0; j < northlandStores.length; j++) {
        northlandStores[j].style.display = "block";
      }
    } else if (region === "Auckland") {
      for (var k = 0; k < aucklandStores.length; k++) {
        aucklandStores[k].style.display = "block";
      }
    } else if (region === "CentralNorth") {
      for (var l = 0; l < centralNorthStores.length; l++) {
        centralNorthStores[l].style.display = "block";
      }
    } else if (region === "Wellington") {
      for (var m = 0; m < wellingtonStores.length; m++) {
        wellingtonStores[m].style.display = "block";
      }
    } else if (region === "SouthIsland") {
      for (var n = 0; n < southIslandStores.length; n++) {
        southIslandStores[n].style.display = "block";
      }
    } else if (region === "OnlineOnly") {
      for (var o = 0; o < onlineOnlyStores.length; o++) {
        onlineOnlyStores[o].style.display = "block";
      }
    }
  };

  render() {
    return (
      <div className="container">
      <div className="store-list">
        <Header title="Vinyl Directory" />
        <Intro insideList={true} />

        {/*<Carousel showStatus={false} autoPlay={true} interval={10000} showArrows={false}>*/}
        {/*        <div>*/}
        {/*            {Object.keys(this.props.stores).map((key) => (*/}
        {/*              <FeaturedStore*/}
        {/*                key={key}*/}
        {/*                index={key}*/}
        {/*                details={this.props.stores[key]}*/}
        {/*                addToFavourites={this.props.addToFavourites}*/}
        {/*                favourites={this.props.favourites}*/}
        {/*              />*/}
        {/*            ))}*/}
        {/*        </div>*/}
        {/*         <div>*/}
        {/*             <div className="store store--featured col-sm-12">*/}
        {/*                <div className="row">*/}
        {/*                    <h3>Featured store</h3>*/}
        {/*                    <img src="https://vinyl-dir.s3.ap-southeast-2.amazonaws.com/Vinylrecords2.jpg" alt="vinyl records" className="image--featured"/>*/}
        {/*                    <div className="store-details">*/}
        {/*                        <h2 className="store__name">Your store here</h2>*/}
        {/*                        <address>*/}
        {/*                            Your address displays here, along with your phone number, website link and any social media accounts.*/}
        {/*                      </address>*/}
        {/*                        <div className="store-text">*/}
        {/*                            <p>Reach record collectors across New Zealand and beyond by becoming a featured store here. Contact us at info@vinyldirectory.nz to enquire now.</p>*/}
        {/*                        </div>*/}
        {/*                        <a href="mailto:info@vinyldirectory.nz">Email info@vinyldirectory.nz</a>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*         </div>*/}
        {/*</Carousel>*/}
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
