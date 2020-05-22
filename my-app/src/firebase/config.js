import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyADaj6tP7Kc0IXQXjTNca2LTjyCZwvU884",
    authDomain: "photowall-dcfe5.firebaseapp.com",
    databaseURL: "https://photowall-dcfe5.firebaseio.com",
    projectId: "photowall-dcfe5",
    storageBucket: "photowall-dcfe5.appspot.com",
    messagingSenderId: "264629837557",
    appId: "1:264629837557:web:a98b046a081fab3fa6afbc"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database}

