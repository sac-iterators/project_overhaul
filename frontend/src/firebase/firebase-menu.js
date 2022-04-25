import { useState, useEffect } from "react";
import { food_db, all_Day_Special, menu_Add_Ins, menu_Appetizers, menu_Beef, menu_Chicken, menu_Chow_Mein,
menu_Combinations, menu_Deep_Fried_Goodiness, menu_Dessert, menu_Flavor, menu_Fried_Rice, menu_Hot,
menu_Pork, menu_Seafood_Platter, menu_Sides, menu_Vegetable, menu_Whats_Cooking, menu_Wing} from "./firebaseConfig";
import { getDocs } from 'firebase/firestore';

function FireMenu() {
    // Variable used to store items/information from the database
    const [food, setFood] = useState([]);

    // This function runs when the page is loaded
    useEffect(() => {
        // Const getFood will grab the documents from the database provided in getDocs()
        const getFood = async () => {
            const data = await getDocs(all_Day_Special);
            setFood(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));    // Maps the database data to food variable
        };

        getFood();
    }, []);

    // * Returns all of the documents in the food_test
    return (
        <>
        <div className="all_Day_Special">
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
    

export default FireMenu;
