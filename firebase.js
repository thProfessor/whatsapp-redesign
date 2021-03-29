import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCzZBb4pzoVZBuFfXjKbtBKNQCmt45moxU",
  authDomain: "whatsapp-redesign-8cc1d.firebaseapp.com",
  projectId: "whatsapp-redesign-8cc1d",
  storageBucket: "whatsapp-redesign-8cc1d.appspot.com",
  messagingSenderId: "405738825470",
  appId: "1:405738825470:web:db54125ee601fc0ca827af",
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
// for server side rendering take note of not reinitializing the app:)

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
