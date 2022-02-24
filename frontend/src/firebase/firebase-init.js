import react, { Component } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that we want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
    const firebaseConfig = {
    apiKey: "AIzaSyATvRiZLnPk-PnOI7G65eI8ZMor1zasffU",
    authDomain: "asian-n-cajun-db.firebaseapp.com",
    projectId: "asian-n-cajun-db",
    storageBucket: "asian-n-cajun-db.appspot.com",
    messagingSenderId: "695099380391",
    appId: "1:695099380391:web:be2b64ee01bc71f32a8182",
    measurementId: "G-K7J5DR7H62"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const analytics = getAnalytics(app);

    async function getFood(db) {
        const foodCol = collection(db, 'food_test');
        const foodSnapshot = await getDocs(foodCol);
        const foodList = foodSnapshot.docs.map(doc => doc.data());
        console.log(foodList);

        return (
        <div>
            <h1>Hello</h1>
            {foodList.map(item => (
                <p>{item.name}</p>
            ))}
        </div>
        );
    }

function fire() {

    return (
        <div>
            {getFood(db)}
        </div>
    );
}

export default fire;