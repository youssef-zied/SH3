import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB_gZgTxiPgKrZEwKpd2wA7YRDO50IxVB0",
    authDomain: "skyhealth-84c12.firebaseapp.com",
    databaseURL: "https://skyhealth-84c12.firebaseio.com",
    projectId: "skyhealth-84c12",
    storageBucket: "skyhealth-84c12.appspot.com",
    messagingSenderId: "633297405749"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots:true})

  export default firebase
