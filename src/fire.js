import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDNOVjWan-Mwy154XRSpSkxTeq4V5F5OJU",
  authDomain: "masrursakib-react-redux-aircnc.firebaseapp.com",
  projectId: "masrursakib-react-redux-aircnc",
  storageBucket: "masrursakib-react-redux-aircnc.appspot.com",
  messagingSenderId: "2375480801",
  appId: "1:2375480801:web:369740651ed1835d510ea0",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
