import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAOtwjAd2BjMd2dwo5oJUDBx_7YeNmQst0",
  authDomain: "vue-project-ffa79.firebaseapp.com",
  projectId: "vue-project-ffa79",
  storageBucket: "vue-project-ffa79.appspot.com",
  messagingSenderId: "828152589566",
  appId: "1:828152589566:web:9833d3b21b80415e4649af",
};
// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

// authantication
const projectAuth = firebase.auth();
export { projectFirestore, timestamp, projectAuth };
