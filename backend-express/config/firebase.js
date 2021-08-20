const firebase = require("firebase/app");
require('firebase/auth');
require('firebase/firestore');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAINE,
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSENGING_SENDER_ID,
    appId: process.env.FIREBASE_APPID,
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }
//firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

module.exports = { db, auth }