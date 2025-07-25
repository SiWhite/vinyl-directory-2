import React from "react";
import ReactDOM from "react-dom";
import SEO from './SEO';
import Header from "./Header";
import FeaturedStore from "./FeaturedStore";
import Intro from "./Intro";
import Adverts from "./Adverts";
import Footer from "./Footer";
import MarkerWithInfoWindow from "./MarkerWithInfoWindow";
import { GoogleMap, LoadScript, MarkerClusterer } from "@react-google-maps/api";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const mapContainerStyle = {
  height: "500px",
  width: "100%",
};

const options = {
  imagePath:
    'https://vinyl-dir.s3-ap-southeast-2.amazonaws.com/icon',
};

function createKey(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


class StoreMap extends React.Component {
  state = {
    region: "All",
    center: { lat: parseFloat(-41.2932786), lng: parseFloat(174.7837615) },
    zoom: 5,
  };
  regions = [
    {
      All: {
        lat: parseFloat(-41.3562773),
        lng: parseFloat(174.4775412),
      },
      Northland: {
        lat: parseFloat(-35.4627936),
        lng: parseFloat(173.8409633),
      },
      Auckland: {
        lat: parseFloat(-36.8621432),
        lng: parseFloat(174.5846066),
      },
      CentralNorth: {
        lat: parseFloat(-39.2791262),
        lng: parseFloat(175.9277365),
      },
      Wellington: {
        lat: parseFloat(-41.2442196),
        lng: parseFloat(174.6916437),
      },
      SouthIsland: {
        lat: parseFloat(-43.3372441),
        lng: parseFloat(170.0830099),
      },
    },
  ];

  goToDashboard = (event) => {
    this.props.history.push(`/dashboard`);
  };
  goToList = (event) => {
    this.props.history.push(`/list`);
  };
  goToFavourites = (event) => {
    this.props.history.push(`/favourites`);
  };

  handleOnLoad = (map) => {
    const controlButtonDiv = document.createElement("div");
    ReactDOM.render(
      <select className="region-selector" onChange={this.handleChange} value={this.state.value}>
        <option value="All">All Regions</option>
        <option value="Northland">Northland</option>
        <option value="Auckland">Auckland</option>
        <option value="CentralNorth">Central North Island</option>
        <option value="Wellington">Wellington</option>
        <option value="SouthIsland">South Island</option>
      </select>,
      controlButtonDiv
    );
    map.controls[window.google.maps.ControlPosition.TOP_RIGHT].push(
      controlButtonDiv
    );
  };

  handleChange = (e) => {
    const region = e.target.value;
    this.setState({ region: region }, this.updateRegion(region));
  };

  updateRegion = (region) => {
    if (region === "All") {
      this.setState({ zoom: 5 });
      this.setState({ center: this.regions[0].All });
    } else if (region === "Northland") {
      this.setState({ zoom: 7 });
      this.setState({ center: this.regions[0].Northland });
    } else if (region === "Auckland") {
      this.setState({ zoom: 7 });
      this.setState({ center: this.regions[0].Auckland });
    } else if (region === "CentralNorth") {
      this.setState({ zoom: 7 });
      this.setState({ center: this.regions[0].CentralNorth });
    } else if (region === "Wellington") {
      this.setState({ zoom: 7 });
      this.setState({ center: this.regions[0].Wellington });
    } else if (region === "SouthIsland") {
      this.setState({ zoom: 6 });
      this.setState({ center: this.regions[0].SouthIsland });
    }
  };

  // Generate SEO data based on current region
  getSEOData = () => {
    const { region } = this.state;
    const storeCount = Object.keys(this.props.stores).length;
    
    const regionLabels = {
      All: "New Zealand",
      Northland: "Northland",
      Auckland: "Auckland", 
      CentralNorth: "Central North Island",
      Wellington: "Wellington",
      SouthIsland: "South Island"
    };

    const currentRegionLabel = regionLabels[region] || "New Zealand";
    
    if (region === "All") {
      return {
        title: "Vinyl Record Stores Map - New Zealand",
        description: `Interactive map showing ${storeCount} independent vinyl record stores across New Zealand. Click on map markers to view store details, contact information, and locations.`,
        keywords: "vinyl records map, record stores New Zealand, vinyl shops map, music stores locations, Auckland Wellington Christchurch vinyl",
        canonical: "https://vinyldirectory.nz/"
      };
    } else {
      return {
        title: `Vinyl Record Stores Map - ${currentRegionLabel}`,
        description: `Interactive map of vinyl record stores in ${currentRegionLabel}, New Zealand. Find independent music shops and record dealers in your area.`,
        keywords: `vinyl records map, record stores ${currentRegionLabel}, vinyl shops ${currentRegionLabel}, music stores ${currentRegionLabel}`,
        canonical: `https://vinyldirectory.nz/?region=${region}`
      };
    }
  };
  
  // Generate structured data for the map
  getStructuredData = () => {
    const { region } = this.state;
    const stores = this.props.stores;
    const storeKeys = Object.keys(stores);
    
    return {
      "@context": "https://schema.org",
      "@type": "Map",
      "name": `Vinyl Record Stores Map${region !== "All" ? ` - ${region}` : ""} - New Zealand`,
      "description": this.getSEOData().description,
      "url": region === "All" ? "https://vinyldirectory.nz/" : `https://vinyldirectory.nz/?region=${region}`,
      "about": {
        "@type": "Thing",
        "name": "Vinyl Record Stores",
        "description": "Independent vinyl record stores and music shops"
      },
      "provider": {
        "@type": "Organization",
        "name": "VinylDirectory.nz",
        "url": "https://vinyldirectory.nz"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": this.state.center.lat,
        "longitude": this.state.center.lng
      },
      "spatialCoverage": {
        "@type": "Place",
        "geo": {
          "@type": "GeoShape",
          "box": "-47.0 166.0 -34.0 179.0"
        },
        "name": "New Zealand"
      },
      "mainEntity": storeKeys.slice(0, 10).map(key => ({ // Limit to first 10 stores to avoid huge JSON
        "@type": "Store",
        "name": stores[key].name,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": `${stores[key].address1} ${stores[key].address2}`,
          "addressLocality": stores[key].address3,
          "addressCountry": "NZ"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": parseFloat(stores[key].lat),
          "longitude": parseFloat(stores[key].lng)
        },
        "telephone": stores[key].phone,
        "url": stores[key].url
      }))
    };
  };

  render() {
    const stores = [];
    const seoData = this.getSEOData();
    const structuredData = this.getStructuredData();

    // Build stores array for map
    Object.keys(this.props.stores).forEach((key) => {
      const obj = {
        name: this.props.stores[key].name,
        address1: this.props.stores[key].address1,
        address2: this.props.stores[key].address2,
        address3: this.props.stores[key].address3,
        phone: this.props.stores[key].phone,
        url: this.props.stores[key].url,
        image: this.props.stores[key].image,
        location: {
          lat: parseFloat(this.props.stores[key].lat),
          lng: parseFloat(this.props.stores[key].lng),
        },
      };
      stores.push(obj);
    });

    return (
      <>
       <SEO 
          title={seoData.title}
          description={seoData.description}
          keywords={seoData.keywords}
          canonical={seoData.canonical}
          ogType="website"
          structuredData={structuredData}
        />

        <div className="container">
          <Header title="Vinyl Directory" />
          <Intro insideMap={true}/>
          <div className="store-map">
            <LoadScript
              googleMapsApiKey={process.env.REACT_APP_MAP_KEY}
              libraries={["marker"]}
              version="weekly"
              >
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={this.state.zoom}
                center={this.state.center}
                onLoad={(map) => this.handleOnLoad(map)}
              >
                <MarkerClusterer options={options}>
                  {(clusterer) =>
                    stores.map((store) => (
                      <MarkerWithInfoWindow
                        key={createKey(10)}
                        clusterer={clusterer}
                        position={store.location}
                        name={store.name}
                        address1={store.address1}
                        address2={store.address2}
                        address3={store.address3}
                        phone={store.phone}
                        url={store.url}
                        image={store.image}
                        setOpenWindow={this.setOpenWindow}
                        isOpen={this.state.isOpen}
                      />
                    ))
                  }
                </MarkerClusterer>
              </GoogleMap>
            </LoadScript>
          </div>
          <Adverts />
          <Footer />
        </div>
      </>
    );
  }
}

export default StoreMap;
