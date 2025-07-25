import React, { useState, useMemo } from "react";
import SEO from "./SEO";
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

  // Generate SEO data based on selected region
  const getSEOData = () => {
    const storeCount = filteredStoreKeys.length;
    
    if (region === "All") {
      return {
        title: "Vinyl Record Stores List - New Zealand",
        description: `Complete directory of ${storeCount} independent vinyl record stores across New Zealand. Find record shops in Auckland, Wellington, Christchurch and more regions.`,
        keywords: "vinyl records, record stores, New Zealand, directory, music shops, vinyl collecting, Auckland, Wellington, Christchurch",
        canonical: "https://vinyldirectory.nz/list"
      };
    } else {
      return {
        title: `Vinyl Record Stores in ${region} - New Zealand`,
        description: `Find ${storeCount} vinyl record stores in ${region}, New Zealand. Independent music shops and record dealers in your area.`,
        keywords: `vinyl records, record stores, ${region}, New Zealand, music shops, independent stores`,
        canonical: `https://vinyldirectory.nz/list`
      };
    }
  };

  // Generate structured data for the store list
  const getStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": `Vinyl Record Stores${region !== "All" ? ` in ${region}` : ""} - New Zealand`,
      "description": getSEOData().description,
      "numberOfItems": filteredStoreKeys.length,
      "itemListElement": filteredStoreKeys.map((key, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Store",
          "name": stores[key]?.name,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": `${stores[key]?.address1 || ""} ${stores[key]?.address2 || ""}`.trim(),
            "addressLocality": stores[key]?.address3,
            "addressCountry": "NZ"
          },
          "telephone": stores[key]?.phone,
          "url": stores[key]?.url,
          "image": stores[key]?.image
        }
      }))
    };
  };

  const seoData = getSEOData();
  const structuredData = getStructuredData();


  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonical={seoData.canonical}
        ogImage="https://vinyl-dir.s3-ap-southeast-2.amazonaws.com/store-placeholder.jpg"
        structuredData={structuredData}
      />
      <div className="container">
        <div className="store-list">
          <Header title="Vinyl Directory" />
          <Intro insideList={true} />

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
    </>
  );
};

export default StoreList;