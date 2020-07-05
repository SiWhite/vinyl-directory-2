import React from "react";
import firebase from "firebase";
import Header from "./Header";
import AddStoreForm from "./AddStoreForm";
import EditStoreForm from "./EditStoreForm";
import Login from "./Login";
import base, { firebaseApp } from "../base";

class Dashboard extends React.Component {
  state = {
    uid: null,
    owner: null,
  };
  // componentDidMount() {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     this.authHandler({ user });
  //   });
  // }
  authHandler = async (authData) => {
    const store = await base.fetch("/", { context: this });
    if (!store.owner) {
      await base.post(`/owner`, {
        data: authData.user.uid,
      });
    }
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid,
    });
  };
  authenticate = (provider) => {
    const authProvider = new firebase.auth.FacebookAuthProvider();
    firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
  };
  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ uid: null });
  };
  render() {
    const logout = <button onClick={this.logout}>Log out</button>;
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    }
    if (this.state.uid !== this.state.owner) {
      return <div>Sorry you are not the owner {logout}</div>;
    }
    return (
      <div className="dashboard">
        <Header title="Vinyl Directory" />
        <h2>Dashboard</h2>
        {logout}
        {Object.keys(this.props.stores).map((key) => (
          <EditStoreForm
            key={key}
            index={key}
            store={this.props.stores[key]}
            updateStore={this.props.updateStore}
            deleteStore={this.props.deleteStore}
          />
        ))}
        <AddStoreForm addStore={this.props.addStore} />
        <button onClick={this.props.loadStoresFromFile}>
          Load stores from file
        </button>
      </div>
    );
  }
}

export default Dashboard;
