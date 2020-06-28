import React from "react";
import StoreList from "./StoreList";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  state = {
    stores: {},
  };
  addStore = (store) => {
    const stores = { ...this.state.stores };
    stores[`store${Date.now()}`] = store;
    this.setState({ stores });
  };
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={StoreList} />
          {/* <Route exact path="/dashboard" component={Dashboard}></Route> */}
          <Route
            exact
            path="/dashboard"
            render={(props) => (
              <Dashboard {...props} addStore={this.addStore} />
            )}
          />
          <Route component={NotFound}></Route>
        </Switch>
      </main>
    );
  }
}

export default App;
