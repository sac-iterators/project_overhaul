import { useState, useEffect } from "react";
import { food_db } from "./firebaseConfig";
import { getDocs } from 'firebase/firestore';


function Fire() {
    const [food, setFood] = useState([]);

    useEffect(() => {
        const getFood = async () => {
            const data = await getDocs(food_db);
            console.log(data);
            setFood(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        };

        getFood();
    }, []);

    // * Returns all of the documents in the food_test
    return (
        <div className="food_test">
            {food.map((item) => 
            { return <div key={item.id}> 
            <h1>Name: {item.name}</h1>
            <h1>Cost: {item.cost}</h1>
            </div>
            })}
        </div>
    );
}

export default Fire;
