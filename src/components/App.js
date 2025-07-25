import React, { useState, useEffect, useCallback, useRef } from 'react';
import ReactGA from "react-ga4";
import firebase from "firebase";
import { Helmet } from 'react-helmet';
import StoreMap from "./StoreMap";
import StoreList from "./StoreList";
import Dashboard from "./Dashboard";
import Favourites from "./Favourites";
import NotFound from "./NotFound";
import { Route, Switch, useLocation } from "react-router-dom";
import storesData from "../stores";
import base, { firebaseApp } from "../base";
import '../css/bootstrap.min.css';
import '../css/carousel.min.css';
import '../css/master.css';
import { loadPayPalScript } from "../utils";

ReactGA.initialize('G-QHEWSX1XWQ');

const App = () => {
  const [stores, setStores] = useState({});
  const [favourites, setFavourites] = useState({});
  const [uid, setUid] = useState(null);
  const [owner, setOwner] = useState(null);
  const [isPayPalScriptLoaded, setIsPayPalScriptLoaded] = useState(false);
  const location = useLocation();

  const refStores = useRef(null);
  const refOwner = useRef(null);

  // Load favourites from localStorage
  useEffect(() => {
    const localStorageRef = localStorage.getItem("favourites");
    if (localStorageRef) {
      setFavourites(JSON.parse(localStorageRef));
    }
  }, []);

  // Sync with Firebase (Rebase)
  useEffect(() => {
  firebase.database().ref('/stores').on('value', (snapshot) => {
    setStores(snapshot.val() || {});
  });
  firebase.database().ref('/owner').on('value', (snapshot) => {
    setOwner(snapshot.val() || null);
  });

  const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authHandler({ user });
    }
  });

  loadPayPalScript(() => {
    setIsPayPalScriptLoaded(true);
    loadPayPalButton();
  });

  return () => {
    firebase.database().ref('/stores').off();
    firebase.database().ref('/owner').off();
    unsubscribe();
  };
  // eslint-disable-next-line
}, []);

  // Save favourites to localStorage
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  // Reload PayPal button on route change
  useEffect(() => {
    loadPayPalButton();
    // eslint-disable-next-line
  }, [location.pathname, isPayPalScriptLoaded]);

  const loadPayPalButton = useCallback(() => {
    if (isPayPalScriptLoaded && window.paypal && window.paypal.HostedButtons) {
      const container = document.getElementById("paypal-container-YPGXYXA2C8GYS");
      if (container) {
        window.paypal.HostedButtons({
          hostedButtonId: "YPGXYXA2C8GYS"
        }).render("#paypal-container-YPGXYXA2C8GYS");
      }
    }
  }, [isPayPalScriptLoaded]);

  const addStore = useCallback((store) => {
    setStores(prev => {
      const updated = { ...prev };
      updated[`store${Date.now()}`] = store;
      return updated;
    });
  }, []);

  const updateStore = useCallback(async (key, updatedStore) => {
  try {
    await firebase.database().ref(`stores/${key}`).set(updatedStore);
  } catch (error) {
    console.error('Error updating store in Firebase:', error);
  }
}, []);

const deleteStore = useCallback(async (key) => {
  try {
    // Only remove from Firebase - let the listener update local state
    await firebase.database().ref(`stores/${key}`).remove();
    console.log('Store deleted successfully');
  } catch (error) {
    console.error('Error deleting store from Firebase:', error);
    // Optionally show user-friendly error message
  }
}, []);

  const loadStoresFromFile = useCallback(() => {
    setStores(storesData);
  }, []);

  const addToFavourites = useCallback((key) => {
    setFavourites(prev => ({ ...prev, [key]: 1 }));
  }, []);

  const deleteFavourite = useCallback((key) => {
    setFavourites(prev => {
      const updated = { ...prev };
      delete updated[key];
      return updated;
    });
  }, []);

const authHandler = useCallback(async (authData) => {
  const store = await base.fetch("/", { context: {} });
  if (!store.owner) {
    await base.post(`/owner`, {
      data: authData.user.uid
    });
  }
  setUid(authData.user.uid);
  setOwner(store.owner || authData.user.uid);
}, []);

const authenticate = useCallback(async (email, password) => {
  const userCredential = await firebaseApp.auth().signInWithEmailAndPassword(email, password);
  const authData = { user: userCredential.user };
  await authHandler(authData);
}, [authHandler]);

  const logout = useCallback(async () => {
    await firebase.auth().signOut();
    setUid(null);
  }, []);

    // Website-level structured data
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Vinyl Directory New Zealand",
    "alternateName": "VinylDirectory.nz",
    "url": "https://vinyldirectory.nz",
    "description": "Complete directory of independent vinyl record stores across New Zealand",
    "publisher": {
      "@type": "Organization",
      "name": "Silent Designs",
      "url": "https://silentdesigns.co.nz"
    },
  };

  return (
     <>
        {/* Default SEO meta tags for the entire site */}
        <Helmet 
          defaultTitle="VinylDirectory.nz - New Zealand Vinyl Record Stores Directory"
          titleTemplate="%s"
        >
          {/* Basic Meta Tags */}
          <meta name="description" content="Complete directory of independent vinyl record stores across New Zealand. Find vinyl shops, record dealers, and music stores in Auckland, Wellington, Christchurch and more." />
          <meta name="keywords" content="vinyl records, record stores, New Zealand, music shops, vinyl collecting, independent stores, Auckland, Wellington, Christchurch" />
          <meta name="author" content="Silent Designs" />
          <meta name="robots" content="index, follow" />
          <meta name="language" content="en-NZ" />
          
          {/* Open Graph Meta Tags */}
          <meta property="og:site_name" content="VinylDirectory.nz" />
          <meta property="og:locale" content="en_NZ" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://vinyl-dir.s3-ap-southeast-2.amazonaws.com/store-placeholder.jpg" />
          <meta property="og:image:width" content="150" />
          <meta property="og:image:height" content="150" />
        
          
          {/* Favicon and Icons */}
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="manifest" href="/site.webmanifest" />
          
          {/* Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify(websiteStructuredData)}
          </script>
          
          {/* Geo Tags for New Zealand */}
          <meta name="geo.region" content="NZ" />
          <meta name="geo.placename" content="New Zealand" />
          <meta name="ICBM" content="-40.900557, 174.885971" />
          
          {/* Additional SEO Tags */}
          <meta name="rating" content="general" />
          <meta name="distribution" content="global" />
          <meta name="revisit-after" content="7 days" />
        </Helmet>

        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <StoreMap
                  {...props}
                  stores={stores || {}}
                  addToFavourites={addToFavourites}
                  isPayPalScriptLoaded={isPayPalScriptLoaded}
                />
              )}
            />
            <Route
              exact
              path="/list"
              render={(props) => (
                <StoreList
                  {...props}
                  stores={stores || {}}
                  addToFavourites={addToFavourites}
                  favourites={favourites}
                  isPayPalScriptLoaded={isPayPalScriptLoaded}
                />
              )}
            />
            <Route
              exact
              path="/dashboard"
              render={(props) => (
                <Dashboard
                  {...props}
                  addStore={addStore}
                  updateStore={updateStore}
                  deleteStore={deleteStore}
                  loadStoresFromFile={loadStoresFromFile}
                  stores={stores || {}}
                  uid={uid}
                  logout={logout}
                  authenticate={authenticate}
                  owner={owner}
                  isPayPalScriptLoaded={isPayPalScriptLoaded}
                />
              )}
            />
            <Route
              exact
              path="/favourites"
              render={(props) => (
                <Favourites
                  {...props}
                  stores={stores || {}}
                  favourites={favourites}
                  deleteFavourite={deleteFavourite}
                  isPayPalScriptLoaded={isPayPalScriptLoaded}
                />
              )}
            />
            <Route component={NotFound}></Route>
          </Switch>
        </main>
    </>
  );
};

export default App;