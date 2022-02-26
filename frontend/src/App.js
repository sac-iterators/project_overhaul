import React, { Component,
useState } from "react";
import Modal from "./components/Modal";
import axios from "axios";
import Home from "./Home";
import Navigation from './Navigation';
import ReservationFunc from "./components/ReservationButton";
import {BrowserRouter, Switch, Route, Routes} from 'react-router-dom';
import About from './About';
import Menu from './Menu';
import items from "./data";
import Categories from "./Categories";

 //class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     viewCompleted: false,
  //     foodList: [],
  //     modal: false,
  //     activeItem: {
  //       title: "",
  //       cost: "",
  //       // completed: false,
  //     },
  //   };
  // }

  // componentDidMount() {
  //   this.refreshList();
  // }

  // refreshList = () => {
  //   axios
  //     .get("/api/foods/")
  //     .then((res) => this.setState({ foodList: res.data }))
  //     .catch((err) => console.log(err));
  // };

  // toggle = () => {
  //   this.setState({ modal: !this.state.modal });
  // };

  // handleSubmit = (item) => {
  //   this.toggle();

  //   if (item.id) {
  //     axios
  //       .put(`http://localhost:8000/api/foods/${item.id}/`, item)
  //       .then((res) => this.refreshList())
  //       .catch((error) => console.log(error));
  //     return;
  //   }
  //   axios
  //     .post("http://localhost:8000/api/foods/", item)
  //     .then((res) => this.refreshList());
    
  // };

  // handleDelete = (item) => {
  //   axios
  //     .delete(`http://localhost:8000/api/foods/${item.id}/`)
  //     .then((res) => this.refreshList());
  // };

  // createItem = () => {
  //   const item = { name: "", cost: "" };

  //   this.setState({ activeItem: item, modal: !this.state.modal });
  // };

  // editItem = (item) => {
  //   this.setState({ activeItem: item, modal: !this.state.modal });
  // };

  // displayCompleted = (status) => {
  //   if (status) {
  //     return this.setState({ viewCompleted: true });
  //   }

  //   return this.setState({ viewCompleted: false });
  // };

  // renderTabList = () => {
  //   return (
  //     <div className="nav nav-tabs">
  //       <span
  //         className={true ? "nav-link active" : "nav-link"}
  //         onClick={() => this.displayCompleted(true)}
  //       >
  //         Food Items
  //       </span>
  //       <span
  //       /* True used to be: this.state.viewCompleted*/
  //         className={true ? "nav-link" : "nav-link active"}
  //         onClick={() => this.displayCompleted(false)}
  //       >
  //         Drinks
  //       </span>
  //     </div>
  //   );
  // };

  // renderItems = () => {
  //   // const { viewCompleted } = this.state;
  //   const newItems = this.state.foodList;
  //   // .filter(
  //   //   (item) => item.completed === viewCompleted
  //   // );

  //   return newItems.map((item) => (
  //     <li
  //       key={item.id}
  //       className="list-group-item d-flex justify-content-between align-items-center"
  //     >
  //       <span
  //         className={`todo-title mr-2 ${
  //           this.state.viewCompleted ? "completed-todo" : ""
  //         }`}
  //         title={item.name}
  //       >
  //         {item.name}
  //       </span>
  //       <span>
  //         <button
  //           className="btn btn-secondary mr-2"
  //           onClick={() => this.editItem(item)}
  //         >
  //           Edit
  //         </button>
  //         <button
  //           className="btn btn-danger"
  //           onClick={() => this.handleDelete(item)}
  //         >
  //           Delete
  //         </button>
  //       </span>
  //     </li>
  //   ));
  // };

  /*render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        
      </div>
    </BrowserRouter>
    );
  }
}
*/

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<MenuApp />} />
      </Routes>
    </div>
  </BrowserRouter>
  
  );
}

// Saul's implementation
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const MenuApp = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu List</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
