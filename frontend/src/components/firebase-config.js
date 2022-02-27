import {initializeApp } from 'firebase/app';
import {getFirestore} from "@firebase/firestore";

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

const app = initializeApp (firebaseConfig);

export const db = getFirestore(app);