import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios";
import Home from "./Home";
import Navigation from './Navigation';
import ReservationFunc from "./components/ReservationButton";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      foodList: [],
      modal: false,
      activeItem: {
        title: "",
        cost: "",
        // completed: false,
      },
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/api/foods/")
      .then((res) => this.setState({ foodList: res.data }))
      .catch((err) => console.log(err));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = (item) => {
    this.toggle();

    if (item.id) {
      axios
        .put(`http://localhost:8000/api/foods/${item.id}/`, item)
        .then((res) => this.refreshList())
        .catch((error) => console.log(error));
      return;
    }
    axios
      .post("http://localhost:8000/api/foods/", item)
      .then((res) => this.refreshList());
    
  };

  handleDelete = (item) => {
    axios
      .delete(`http://localhost:8000/api/foods/${item.id}/`)
      .then((res) => this.refreshList());
  };

  createItem = () => {
    const item = { name: "", cost: "" };

    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  displayCompleted = (status) => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }

    return this.setState({ viewCompleted: false });
  };

  renderTabList = () => {
    return (
      <div className="nav nav-tabs">
        <span
          className={true ? "nav-link active" : "nav-link"}
          onClick={() => this.displayCompleted(true)}
        >
          Food Items
        </span>
        <span
        /* True used to be: this.state.viewCompleted*/
          className={true ? "nav-link" : "nav-link active"}
          onClick={() => this.displayCompleted(false)}
        >
          Drinks
        </span>
      </div>
    );
  };

  renderItems = () => {
    // const { viewCompleted } = this.state;
    const newItems = this.state.foodList;
    // .filter(
    //   (item) => item.completed === viewCompleted
    // );

    return newItems.map((item) => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`todo-title mr-2 ${
            this.state.viewCompleted ? "completed-todo" : ""
          }`}
          title={item.name}
        >
          {item.name}
        </span>
        <span>
          <button
            className="btn btn-secondary mr-2"
            onClick={() => this.editItem(item)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.handleDelete(item)}
          >
            Delete
          </button>
        </span>
      </li>
    ));
  };

  render() {
    return (
      <main className="container">
        <h1 className="text-uppercase text-center my-4">Asian N Cajun 2 app</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
                <button
                  className="btn btn-primary"
                  onClick={this.createItem}
                >
                  Add task
                </button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush border-top-0">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        <Home />
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}

export default App;
