import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from '@firebase/firestore';

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

// Create a reference to the food_test collection
const food_db = collection(db, 'food_test');

// Create a reference to the food_test collection
const reservation_db = collection(db, 'reservation_Test');

// Gather files for export
export {food_db, reservation_db};