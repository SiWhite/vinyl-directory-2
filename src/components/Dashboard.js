import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import AddStoreForm from "./AddStoreForm";
import EditStoreForm from "./EditStoreForm";
import Login from "./Login";

function Dashboard({
  uid,
  owner,
  stores,
  logout,
  authenticate,
  updateStore,
  deleteStore,
  addStore,
  loadStoresFromFile,
}) {

  // Not logged in
  if (!uid) {
    return <Login authenticate={authenticate} />;
  }

  // Not the owner
  if (uid !== owner) {
    return (
      <div className="dashboard">
        <h1>Sorry, you are not authorised to view this page</h1>
        <button className="btn-logout" onClick={logout}>Log out</button>
      </div>
    );
  }

  // Owner view
  return (
    <div className="container">
      <div className="dashboard col-sm-12">
        <Header title="Vinyl Directory" />
        <h2>Dashboard</h2>
        <button className="btn-logout" onClick={logout}>Log out</button>
        {Object.keys(stores).map((key) => (
          <EditStoreForm
            key={key}
            index={key}
            store={stores[key]}
            updateStore={updateStore}
            deleteStore={deleteStore}
          />
        ))}
        <AddStoreForm addStore={addStore} />
        <button onClick={loadStoresFromFile}>
          Load stores from file
        </button>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  uid: PropTypes.string,
  owner: PropTypes.string,
  stores: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  authenticate: PropTypes.func.isRequired,
  updateStore: PropTypes.func.isRequired,
  deleteStore: PropTypes.func.isRequired,
  addStore: PropTypes.func.isRequired,
  loadStoresFromFile: PropTypes.func.isRequired,
};

export default Dashboard;