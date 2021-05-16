import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
     apiKey: "AIzaSyB-TkUwF_thk93OtKjom8Ufro9O0wOeeO0",
  authDomain: "facebook-messenger-clone-8d2fc.firebaseapp.com",
  projectId: "facebook-messenger-clone-8d2fc",
  storageBucket: "facebook-messenger-clone-8d2fc.appspot.com",
  messagingSenderId: "29497761745",
  appId: "1:29497761745:web:b212e615afe682f0000af0",
  measurementId: "G-9RRY15Y3X2"
})

const db = firebaseApp.firestore()

export default db;