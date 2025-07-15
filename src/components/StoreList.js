import React, { useState, useMemo } from "react";
import Header from "./Header";
import Intro from "./Intro";
import Store from "./Store";
import Adverts from "./Adverts";
import Footer from "./Footer";
import FeaturedStore from "./FeaturedStore";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const REGION_LABELS = [
  { value: "All", label: "All Regions" },
  { value: "Northland", label: "Northland" },
  { value: "Auckland", label: "Auckland" },
  { value: "Central North Island", label: "Central North Island" },
  { value: "Wellington", label: "Wellington" },
  { value: "South Island", label: "South Island" },
  { value: "Online only", label: "Online Only" },
];

const StoreList = ({ stores = {}, addToFavourites, favourites = {} }) => {
  const [region, setRegion] = useState("All");

  const handleChange = (e) => {
    setRegion(e.target.value);
  };

  // Filter stores by region
  const filteredStoreKeys = useMemo(() => {
    if (region === "All") return Object.keys(stores);
    return Object.keys(stores).filter(
      (key) => stores[key]?.region === region
    );
  }, [region, stores]);

  return (
    <div className="container">
      <div className="store-list">
        <Header title="Vinyl Directory" />
        <Intro insideList={true} />

        {/* Example FeaturedStore carousel (uncomment and adjust as needed)
        <Carousel showStatus={false} autoPlay={true} interval={10000} showArrows={false}>
          {Object.keys(stores).map((key) => (
            <FeaturedStore
              key={key}
              index={key}
              details={stores[key]}
              addToFavourites={addToFavourites}
              favourites={favourites}
            />
          ))}
        </Carousel>
        */}

        <div>
          <h2>Store List</h2>
          <div className="filter-container">
            <label htmlFor="list-filter">Filter by region: </label>
            <select
              className="region-selector"
              id="list-filter"
              onChange={handleChange}
              value={region}
            >
              {REGION_LABELS.map((r) => (
                <option key={r.value} value={r.value}>
                  {r.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <ul className="stores">
          {filteredStoreKeys.map((key) => (
            <Store
              key={key}
              index={key}
              details={stores[key]}
              addToFavourites={addToFavourites}
              favourites={favourites}
            />
          ))}
        </ul>
      </div>
      <Adverts />
      <Footer />
    </div>
  );
};

export default StoreList;