import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyA2-CCm_fICOrDpLGXcngXfxmiXLRvnMoU",
    authDomain: "letmeask-95f1b.firebaseapp.com",
    databaseURL: "https://letmeask-95f1b-default-rtdb.firebaseio.com",
    projectId: "letmeask-95f1b",
    storageBucket: "letmeask-95f1b.appspot.com",
    messagingSenderId: "796497311865",
    appId: "1:796497311865:web:300b9f250ecf379a92fca8"
  };

  firebase.initializeApp(firebaseConfig)
  
  export const auth = firebase.auth()
  export const database = firebase.database();