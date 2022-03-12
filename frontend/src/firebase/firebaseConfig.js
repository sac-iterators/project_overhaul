import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc } from '@firebase/firestore';
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


// Gather files for export
export {food_db, reservation_db, menu_Add_Ins, menu_Chow_Mein, applications_db, storage};
