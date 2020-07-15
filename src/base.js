import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA3H4mM75SwW1f6RAT5XsQcZzt3EeoaWSc",
  authDomain: "vinyl-directory.firebaseapp.com",
  databaseURL: "https://vinyl-directory.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
