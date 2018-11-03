  import * as firebase from 'firebase';
  
  const config = {
    apiKey: "AIzaSyC7EQQXYebehgsgHvTsbhm10-csXQ5qZq4",
    authDomain: "book-skill-tree.firebaseapp.com",
    databaseURL: "https://book-skill-tree.firebaseio.com",
    messagingSenderId: "364991412595",
    projectId: "book-skill-tree",
    storageBucket: "book-skill-tree.appspot.com"
  };
  firebase.initializeApp(config);

  export default firebase;