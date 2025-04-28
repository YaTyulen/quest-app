import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDsevDhWa30n9UmLvAhaNc95olTA4n0dqk",
    authDomain: "quest-app-d2f6f.firebaseapp.com",
    projectId: "quest-app-d2f6f",
    storageBucket: "quest-app-d2f6f.firebasestorage.app",
    messagingSenderId: "483064439283",
    appId: "1:483064439283:web:7937747f3b550a3c3d3286"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
//const storage = getStorage(app);

export { auth, db };