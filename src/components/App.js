import React from "react";
import StoreList from "./StoreList";
import Dashboard from "./Dashboard";
import Favourites from "./Favourites";
import NotFound from "./NotFound";
import { Route, Switch } from "react-router-dom";
import stores from "../stores";
import base from "../base";

class App extends React.Component {
  state = {
    stores: {},
    favourites: {},
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
  }

  componentDidUpdate() {
    localStorage.setItem("favourites", JSON.stringify(this.state.favourites));
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

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
    console.log(key);
    const favourites = { ...this.state.favourites };
    delete favourites[key];
    this.setState({
      favourites,
    });
  };

  render() {
    return (
      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <StoreList
                {...props}
                stores={this.state.stores}
                addToFavourites={this.addToFavourites}
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
              />
            )}
          />
          <Route component={NotFound}></Route>
        </Switch>
      </main>
    );
  }
}

export default App;
