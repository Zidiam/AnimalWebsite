import React, { Component } from "react";
import axios from "axios";
import Modal from "./components/Modal.js";

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
      sort : true,
      modal: false,
      animalList: []
    };
  }
  componentDidMount() {
    this.refreshList();
  }
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
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
    if(this.state.sort){
      newItems.sort();
    }
    else{
      newItems.reverse();
    }
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
            onClick={() => this.viewItem(item)}
            className="btn btn-secondary mr-2"
          >
            Details
          </button>
        </span>
      </li>
    ));
  };
  handleDone = () => {
    this.toggle();
  };
  viewItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };
  a_z = "A-Z";
  sortA_Z = () =>{
    this.setState({sort: !this.state.sort});
    this.refreshList();
  };
  getA_Z = () =>{
    if(this.state.sort){
      return "A-Z";
    }
    else{
      return "Z-A";
    }
  };
  render() {
    return (
      <main className="content">
        <h1 className="text-white text-uppercase text-center my-4">Animals</h1>
        <div className="row ">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              {this.renderTabList()}
              <div className="">
                Sort by:
                <button onClick={this.sortA_Z} className="btn btn-primary">
                  { this.getA_Z() }
                </button>
              </div>
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
            onDone={this.handleDone}
          />
        ) : null}
      </main>
    );
  }
}
export default App;