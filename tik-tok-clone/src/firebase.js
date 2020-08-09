import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCZSXqPEVoSYqkoqPDoiDGZbfzZo2VAniQ",
  authDomain: "tik-tok-clone-7d4b7.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-7d4b7.firebaseio.com",
  projectId: "tik-tok-clone-7d4b7",
  storageBucket: "tik-tok-clone-7d4b7.appspot.com",
  messagingSenderId: "887003039785",
  appId: "1:887003039785:web:059865044274369479b438",
  measurementId: "G-Z8YJ81DV7V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
