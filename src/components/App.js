import React from "react";
import StoreList from "./StoreList";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import { Route, Switch } from "react-router-dom";
import stores from "../stores";

class App extends React.Component {
  state = {
    stores: {},
  };
  addStore = (store) => {
    const stores = { ...this.state.stores };
    stores[`store${Date.now()}`] = store;
    this.setState({ stores });
  };
  loadStoresFromFile = () => {
    this.setState({
      stores,
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
              <StoreList {...props} stores={this.state.stores} />
            )}
          />
          <Route
            exact
            path="/dashboard"
            render={(props) => (
              <Dashboard
                {...props}
                addStore={this.addStore}
                loadStoresFromFile={this.loadStoresFromFile}
                stores={this.state.stores}
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
