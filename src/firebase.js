import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_ewQGVXXPOauyZ7Zd3G_8TMsZOTvVhAk",
    authDomain: "slack-clone-ae1a4.firebaseapp.com",
    projectId: "slack-clone-ae1a4",
    storageBucket: "slack-clone-ae1a4.appspot.com",
    messagingSenderId: "49307038536",
    appId: "1:49307038536:web:c9814f0ed898be1209397d",
    measurementId: "G-RMMFYQ48CZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;