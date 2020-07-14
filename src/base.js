import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_MAP_KEY,
  authDomain: "vinyl-directory.firebaseapp.com",
  databaseURL: "https://vinyl-directory.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
