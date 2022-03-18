import { initializeApp } from 'firebase/app';
import { getFirestore, query, getDocs,  collection, where, addDoc, doc, setDoc } from '@firebase/firestore';
import { GoogleAuthProvider, FacebookAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth'
import "firebase/auth"
import { getStorage } from '@firebase/storage';

// Configuration file for firebase
const firebaseConfig = {
  apiKey: "AIzaSyATvRiZLnPk-PnOI7G65eI8ZMor1zasffU",
  authDomain: "asian-n-cajun-db.firebaseapp.com",
  databaseURL: "https://asian-n-cajun-db-default-rtdb.firebaseio.com",
  projectId: "asian-n-cajun-db",
  storageBucket: "asian-n-cajun-db.appspot.com",
  messagingSenderId: "695099380391",
  appId: "1:695099380391:web:be2b64ee01bc71f32a8182",
  measurementId: "G-K7J5DR7H62"
};

// Initialize app 
const app = initializeApp(firebaseConfig);

// Initialize authentication
const auth = getAuth(app)

// Get a reference to the database service
const db = getFirestore(app);
const storage = getStorage(app);

// Create a reference to the food_test collection
const food_db = collection(db, 'food_test');

// Create a reference to the food_test collection
const reservation_db = collection(db, 'reservation_Test');

// Create a reference to the applications collection
const applications_db = collection(db, 'applications');

// Reference to Chow Mein Portion of Menu
const menu_Chow_Mein = collection(db, "menu_Chow_Mein");

const menu_Add_Ins = collection(db, "menu_Add_Ins");

const job_listings = collection(db, "job_listings");

const job_listings_test = collection(db, "job_listings_test");

const googleProvider = new GoogleAuthProvider();

const facebookProvider = new FacebookAuthProvider();

// Handles onClick event for signing in with Google
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// Handles onClick event for signing in with Facebook
const signInWithFacebook = async () => {
  try {
    const res = await signInWithPopup(auth, facebookProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "facebook",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};


// Gather files for export
export {auth, signInWithGoogle, signInWithFacebook, logout, food_db, reservation_db, menu_Add_Ins, menu_Chow_Mein, applications_db, storage, job_listings, job_listings_test};

