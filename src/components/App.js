import React from 'react';
import ReactGA from "react-ga4";
import firebase from "firebase";
import StoreMap from "./StoreMap";
import StoreList from "./StoreList";
import Dashboard from "./Dashboard";
import Favourites from "./Favourites";
import NotFound from "./NotFound";
import { Route, Switch, withRouter } from "react-router-dom";
import stores from "../stores";
import base, { firebaseApp } from "../base";
import '../css/bootstrap.min.css';
import '../css/carousel.min.css';
import '../css/master.css';
import { loadPayPalScript } from "../utils"; // Import the utility function

//Unique Google Analytics tracking number
ReactGA.initialize('G-QHEWSX1XWQ');

class App extends React.Component {
  state = {
    stores: {},
    favourites: {},
    uid: null,
    owner: null,
    isPayPalScriptLoaded: false
  };

  componentDidMount() {
    const localStorageRef = localStorage.getItem("favourites");
    if (localStorageRef) {
      this.setState({
        favourites: JSON.parse(localStorageRef),
      });
    }
    this.ref = base.syncState(`/stores`, {
      context: this,
      state: "stores",
    });
    this.ref = base.syncState(`/owner`, {
      context: this,
      state: "owner",
    });
    // firebase.auth().onAuthStateChanged((user) => {
    //   this.authHandler({ user });
    // });

    // Load PayPal script
    loadPayPalScript(() => {
      this.setState({ isPayPalScriptLoaded: true }, this.loadPayPalButton);
    });
  }

  componentDidUpdate(prevProps) {
    localStorage.setItem("favourites", JSON.stringify(this.state.favourites));
    // Check if route has changed
    if (this.props.location.pathname !== prevProps.location.pathname) {
      // Reload PayPal button on route change
      this.loadPayPalButton();
    }
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  loadPayPalButton = () => {
    if (this.state.isPayPalScriptLoaded && window.paypal && window.paypal.HostedButtons) {
      const container = document.getElementById("paypal-container-YPGXYXA2C8GYS");
      if (container) {
        window.paypal.HostedButtons({
          hostedButtonId: "YPGXYXA2C8GYS"
        }).render("#paypal-container-YPGXYXA2C8GYS");
      }
    }
  };

  addStore = (store) => {
    const stores = { ...this.state.stores };
    stores[`store${Date.now()}`] = store;
    this.setState({ stores });
  };

  updateStore = (key, updatedStore) => {
    const stores = { ...this.state.stores };
    stores[key] = updatedStore;
    this.setState({ stores });
  };

  deleteStore = (key) => {
    const stores = { ...this.state.stores };
    stores[key] = null;
    this.setState({ stores });
  };

  loadStoresFromFile = () => {
    this.setState({
      stores,
    });
  };

  addToFavourites = (key) => {
    const favourites = { ...this.state.favourites };
    favourites[key] = 1;
    this.setState({
      favourites,
    });
  };

  deleteFavourite = (key) => {
    const favourites = { ...this.state.favourites };
    delete favourites[key];
    this.setState({
      favourites,
    });
  };

  // authenticate = (provider) => {
  //   const authProvider = new firebase.auth.FacebookAuthProvider();
  //   firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
  // };

  // authHandler = async (authData) => {
  //   const store = await base.fetch("/", { context: this });
  //   if (!store.owner) {
  //     await base.post(`/owner`,{
  //       data: authData.user.uid
  //     })
  //   }
  //   if (authData.user) {
  //     this.setState({
  //       uid: authData.user.uid,
  //       owner: store.owner,
  //     });
  //   }
  // };

  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ uid: null });
  };

  render() {
    return (
      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <StoreMap
                {...props}
                stores={this.state.stores}
                addToFavourites={this.addToFavourites}
                isPayPalScriptLoaded={this.state.isPayPalScriptLoaded}
              />
            )}
          />
          <Route
            exact
            path="/list"
            render={(props) => (
              <StoreList
                {...props}
                stores={this.state.stores}
                addToFavourites={this.addToFavourites}
                favourites={this.state.favourites}
                isPayPalScriptLoaded={this.state.isPayPalScriptLoaded}
              />
            )}
          />
          <Route
            exact
            path="/dashboard"
            render={(props) => (
              <Dashboard
                {...props}
                addStore={this.addStore}
                updateStore={this.updateStore}
                deleteStore={this.deleteStore}
                loadStoresFromFile={this.loadStoresFromFile}
                stores={this.state.stores}
                uid={this.state.uid}
                logout={this.logout}
                //authenticate={this.authenticate}
                owner={this.state.owner}
                isPayPalScriptLoaded={this.state.isPayPalScriptLoaded}
              />
            )}
          />
          <Route
            exact
            path="/favourites"
            render={(props) => (
              <Favourites
                {...props}
                stores={this.state.stores}
                favourites={this.state.favourites}
                deleteFavourite={this.deleteFavourite}
                isPayPalScriptLoaded={this.state.isPayPalScriptLoaded}
              />
            )}
          />
          <Route component={NotFound}></Route>
        </Switch>
      </main>
    );
  }
}

export default withRouter(App);
