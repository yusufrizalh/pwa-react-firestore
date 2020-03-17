import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyClAyt1WLpJZsdgzZA_1x_nCBQoLhnne3Q",
    authDomain: "react-pwa-17032020.firebaseapp.com",
    databaseURL: "https://react-pwa-17032020.firebaseio.com",
    projectId: "react-pwa-17032020",
    storageBucket: "react-pwa-17032020.appspot.com",
    messagingSenderId: "105516755048",
    appId: "1:105516755048:web:64a1623a15a3876e6ab3dd"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;