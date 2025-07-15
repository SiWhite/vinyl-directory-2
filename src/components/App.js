import React, { useState, useEffect, useCallback, useRef } from 'react';
import ReactGA from "react-ga4";
import firebase from "firebase";
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

  const updateStore = useCallback((key, updatedStore) => {
    setStores(prev => {
      const updated = { ...prev };
      updated[key] = updatedStore;
      return updated;
    });
  }, []);

  const deleteStore = useCallback((key) => {
    setStores(prev => {
      const updated = { ...prev };
      updated[key] = null;
      return updated;
    });
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

  const authenticate = useCallback(async (email, password) => {
    const userCredential = await firebaseApp.auth().signInWithEmailAndPassword(email, password);
    const authData = { user: userCredential.user };
    await authHandler(authData);
  }, [authHandler]);

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

  const logout = useCallback(async () => {
    await firebase.auth().signOut();
    setUid(null);
  }, []);

  return (
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
  );
};

export default App;