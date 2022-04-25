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

const careerInfo = collection(db, "careerInfo");

const googleProvider = new GoogleAuthProvider();

const facebookProvider = new FacebookAuthProvider();

// Saul's Implementation
const all_Day_Special = collection(db, "all_Day_Special");
const menu_Appetizers = collection(db, "menu_Appetizers");
const menu_Beef = collection(db, "menu_Beef");
const menu_Chicken = collection(db, "menu_Chicken");
const menu_Combinations = collection(db, "menu_Combinations");
const menu_Deep_Fried_Goodiness = collection(db, "menu_Deep_Fried_Goodiness");
const menu_Dessert = collection(db, "menu_Dessert");
const menu_Flavor = collection(db, "menu_Flavor");
const menu_Fried_Rice = collection(db, "menu_Fried_Rice");
const menu_Hot = collection(db, "menu_Hot");
const menu_Pork = collection(db, "menu_Pork");
const menu_Seafood_Platter = collection(db, "menu_Seafood_Platter");
const menu_Sides = collection(db, "menu_Sides");
const menu_Vegetable = collection(db, "menu_Vegetable");
const menu_Whats_Cooking = collection(db, "menu_Whats_Cooking");
const menu_Wing = collection(db, "menu_Wing");
const Full_Menu = collection(db, "Full_Menu");

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
export {auth, signInWithGoogle, signInWithFacebook, logout, food_db, Full_Menu, reservation_db, menu_Add_Ins, menu_Chow_Mein, applications_db, storage, job_listings, careerInfo, all_Day_Special, menu_Appetizers, 
  menu_Beef, menu_Chicken, menu_Combinations, menu_Deep_Fried_Goodiness, menu_Dessert, menu_Flavor, menu_Fried_Rice, menu_Hot, menu_Pork, menu_Seafood_Platter, menu_Sides, menu_Vegetable, menu_Whats_Cooking, menu_Wing};

