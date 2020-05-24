import firebase from 'firebase';

var firebaseConfig = {
    //Config details
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database}

