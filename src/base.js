import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC305hFfwxNiq1CZavOBfLTJxyMtVlMrYA",
  authDomain: "vinyl-directory-2.firebaseapp.com",
  databaseURL: "https://vinyl-directory-2-default-rtdb.firebaseio.com/",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
