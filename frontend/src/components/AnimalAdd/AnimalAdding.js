import React, { Component } from "react";
import Modal from "./components/Modal.js";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewExtinct: false,
      activeItem: {
        name: "",
        species: "",
        age: "",
        colors: "",
        extinct: false
      },
      animalList: []
    };
  }
  componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    axios
      .get("http://localhost:8000/api/animals/")
      .then(res => this.setState({ animalList: res.data }))
      .catch(err => console.log(err));
  };
  displayExtinct = status => {
    if (status) {
      return this.setState({ viewExtinct: true });
    }
    return this.setState({ viewExtinct: false });
  };
  renderTabList = () => {
    return (
      <div className="my-5 tab-list">
        <span
          onClick={() => this.displayExtinct(true)}
          className={this.state.viewExtinct ? "active" : ""}
        >
          Extinct
        </span>
        <span
          onClick={() => this.displayExtinct(false)}
          className={this.state.viewExtinct ? "" : "active"}
        >
          Not Extinct
        </span>
      </div>
    );
  };
  renderItems = () => {
    const { viewExtinct } = this.state;
    const newItems = this.state.animalList.filter(
      item => item.extinct === viewExtinct
    );
    return newItems.map(item => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`todo-title mr-2 ${
            this.state.viewExtinct ? "extinct-animal" : ""
          }`}
          name={item.species}
        >
          {item.name}
        </span>
        <span>
          <button
            onClick={() => this.editItem(item)}
            className="btn btn-secondary mr-2"
          >
            Edit
          </button>
          <button
            onClick={() => this.handleDelete(item)}
            className="btn btn-danger mr-2"
          >
            Delete
          </button>
          <button
            onClick={() => this.toggleItem(item)}
            className="btn btn-success"
          >
            Switch
          </button>
        </span>
      </li>
    ));
  };
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  handleSubmit = item => {
    this.toggle();
    if (item.id) {
      axios
        .put(`http://localhost:8000/api/animals/${item.id}/`, item)
        .then(res => this.refreshList());
      return;
    }
    axios
      .post("http://localhost:8000/api/animals/", item)
      .then(res => this.refreshList());
  };
  handleDelete = item => {
    axios
      .delete(`http://localhost:8000/api/animals/${item.id}/`)
      .then(res => this.refreshList());
  };
  createItem = () => {
    const item = { name: "", species: "", age: "", colors: "", extinct: false };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };
  editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };
  toggleItem = item => {
    this.toggle();
    item.extinct = !item.extinct
    if (item.id) {
      this.setState({ modal: false });
      axios
        .put(`http://localhost:8000/api/animals/${item.id}/`, item)
      return;
    }
    axios
        .then(res => this.refreshList());
  };
  render() {
    return (
      <main className="content">
        <h1 className="text-white text-uppercase text-center my-4">Animal app</h1>
        <div className="row ">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="">
                <button onClick={this.createItem} className="btn btn-primary">
                  Add Animal
                </button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
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