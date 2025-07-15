import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import Adverts from "./Adverts";
import Footer from "./Footer";
import Store from "./Store";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import FeaturedStore from "./FeaturedStore";
import { useHistory } from "react-router-dom";

const Favourites = ({
  stores = {},
  favourites = {},
  addToFavourites,
  deleteFavourite,
}) => {
  const history = useHistory();

  const goToDashboard = () => history.push(`/dashboard`);
  const goToMap = () => history.push(`/`);
  const goToList = () => history.push(`/list`);

  const renderFavourite = (key) => {
    const fav = stores[key];
    if (!fav) return null;
    return (
      <Store
        key={key}
        index={key}
        details={stores[key]}
        addToFavourites={addToFavourites}
        favourites={favourites}
        deleteFavourite={deleteFavourite}
      />
    );
  };

  const favIds = Object.keys(favourites);
  const hasFavs = favIds.length > 0;

  return (
    <div className="container">
      <div className="favourites">
        <Header title="Vinyl Directory" />
        <Intro insideFavs={true} />
        {/* Carousel and FeaturedStore code omitted for brevity */}
        <h2>Favourites</h2>
        {hasFavs ? (
          <ul className="favourites">{favIds.map(renderFavourite)}</ul>
        ) : (
          <p>
            You haven't added any favourites yet. Try adding some from the{" "}
            <a href="/list">list of stores</a>.
          </p>
        )}
      </div>
      <Adverts />
      <Footer />
    </div>
  );
};

export default Favourites;