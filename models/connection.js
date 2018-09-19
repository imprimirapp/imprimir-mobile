import firebase from "firebase";
import 'firebase/auth';
import serviceAccount from '../firebaseConfig.js';
firebase.initializeApp(serviceAccount);
const auth = firebase.auth();

export default auth;