import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAX7KnG7uYI5-oO8CtcphE1ajOovgU9-BM",
  authDomain: "drive-c572d.firebaseapp.com",
  projectId: "drive-c572d",
  storageBucket: "drive-c572d.appspot.com",
  messagingSenderId: "594263182906",
  appId: "1:594263182906:web:2ad02df3e973c17d9a2f03",
};

const app = initializeApp(firebaseConfig);
export default getFirestore();
