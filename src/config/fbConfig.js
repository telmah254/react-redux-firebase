  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  
  
  // Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyBa3j6AwOLn3yygtv9yAxXta8T7oMq9hVE",
    authDomain: "react-redux-b0066.firebaseapp.com",
    databaseURL: "https://react-redux-b0066.firebaseio.com",
    projectId: "react-redux-b0066",
    storageBucket: "react-redux-b0066.appspot.com",
    messagingSenderId: "786219736500",
    appId: "1:786219736500:web:7330e93d506584e819e6e1",
    measurementId: "G-DWYY9SK4G1"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
 firebase.firestore().settings({ timestampsInSnapshots: true });


 export default firebase;