// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth"; // for authentication
import { getFirestore } from "firebase/firestore"; // for cloud firestore
import { getStorage } from "firebase/storage"; // for cloud storage
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/* NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyCVBQT19GAZU5boymTNBlbc0GQnoaNoC8M
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=reddit-clone-357d8.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=reddit-clone-357d8
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=reddit-clone-357d8.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=930618809521
NEXT_PUBLIC_FIREBASE_APP_ID=1:930618809521:web:4f0e33fb0cbf758d75d690 */

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase for SSR
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, firestore, auth, storage };
// export all the firebase services you need so we can use them in our client side files
