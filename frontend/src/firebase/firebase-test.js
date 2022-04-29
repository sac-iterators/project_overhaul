import { useState, useEffect } from "react";
import { food_db, menu_Chow_Mein, menu_Add_Ins,reservation_db } from "./firebaseConfig";
import { getDocs, orderBy } from 'firebase/firestore';
import {FormControl, Table} from "react-bootstrap";

function Fire() {
    // Variable used to store items/information from the database
    const [food, setFood] = useState([]);
    const [reservation, setReservation] = useState([]);

    // This function runs when the page is loaded
    useEffect(() => {
        // Const getFood will grab the documents from the database provided in getDocs()
        const getFood = async () => {
            const data = await getDocs(menu_Chow_Mein);
            setFood(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));    // Maps the database data to food variable
        };

        const getReservation = async () => {
            const data = await getDocs(reservation_db,) ;
            setReservation(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));    
        };

        getFood();
        getReservation();
    }, []);

    // * Returns all of the documents in the food_test
    return (
        <>
        {/* <div className="food_test">
            {food.map((item) => 
            { return <div key={item.id}> 
            <h1>Name: {item.name}</h1>
            <h1>Cost: {item.cost}</h1>
            </div>
            })}
        </div> */}
        

        {/* <div className="menu_Chow_Mein">
            {food.map((item) => 
            { return <div key={item.id}> 
            <h1>Name: {item.Name}</h1>
            <h1>Cost: {item.Price}</h1>
            <h1>Spicy: {item.Spicy ? "true": "false"}</h1>
            </div>
            })}
        </div> */}

        <div className="reservation_Test" >
            {reservation.map((item) => 
            { return <div key={item.id}> 
            <Table striped bordered hover key={item.id}>
                <thead>
                    <tr>
                    <th>Date </th>
                    <th>Time </th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email / Phone number </th>
                    <th>Guests </th>
                    <th>Notes: </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td> {item.date}</td>
                    <td> {item.time}</td>
                    <td> {item.fname} </td>
                    <td>{item.lname}</td>
                    <td>{item.email +" / "+ item.phoneNum}</td>
                    <td>{item.guests}</td>
                    <td>{item.notes}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
            })}
        </div>

        </>
    );
    
}

export default Fire;
