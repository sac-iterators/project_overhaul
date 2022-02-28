import { useState, useEffect } from "react";
import { food_db, menu_Chow_Mein, menu_Add_Ins } from "./firebaseConfig";
import { getDocs } from 'firebase/firestore';


function Fire() {
    // Variable used to store items/information from the database
    const [food, setFood] = useState([]);

    // This function runs when the page is loaded
    useEffect(() => {
        // Const getFood will grab the documents from the database provided in getDocs()
        const getFood = async () => {
            const data = await getDocs(menu_Chow_Mein);
            setFood(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));    // Maps the database data to food variable
        };

        getFood();
    }, []);

    // * Returns all of the documents in the food_test
    return (
        <>
        <div className="food_test">
            {food.map((item) => 
            { return <div key={item.id}> 
            <h1>Name: {item.name}</h1>
            <h1>Cost: {item.cost}</h1>
            </div>
            })}
        </div>
        

        <div className="menu_Chow_Mein">
            {food.map((item) => 
            { return <div key={item.id}> 
            <h1>Name: {item.Name}</h1>
            <h1>Cost: {item.Price}</h1>
            <h1>Spicy: {item.Spicy ? "true": "false"}</h1>
            </div>
            })}
        </div>

        </>
    );
    
}

export default Fire;
