import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import Adverts from "./Adverts";
import Footer from "./Footer";
import Store from "./Store";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import FeaturedStore from "./FeaturedStore";

class Favourites extends React.Component {
  goToDashboard = (event) => {
    this.props.history.push(`/dashboard`);
  };
  goToMap = (event) => {
    this.props.history.push(`/`);
  };
  goToList = (event) => {
    this.props.history.push(`/list`);
  };
  renderFavourite = (key) => {
    const fav = this.props.stores[key];
    if (!fav) return null;
    return (
    <Store
      key={key}
      index={key}
      details={this.props.stores[key]}
      addToFavourites={this.props.addToFavourites}
      favourites={this.props.favourites}
      deleteFavourite={this.props.deleteFavourite}
    />
    );
  };
  render() {
    const favIds = Object.keys(this.props.favourites);
    const hasFavs = favIds.length > 0;
    console.log(hasFavs);
    return (
      <div className="container">
        <div className="favourites">
          <Header title="Vinyl Directory" />
          <Intro insideFavs={true} />
        {/*  <Carousel showStatus={false} autoPlay={true} interval={10000} showArrows={false}>*/}
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
          <h2>Favourites</h2>
          {hasFavs ? <ul className="favourites">{favIds.map(this.renderFavourite)}</ul> : <p>You haven't added any favourites yet. Try adding some from the <a href="/list">list of stores</a>.</p>}
        </div>
        <Adverts />
        <Footer />
      </div>
    );
  }
}

export default Favourites;
