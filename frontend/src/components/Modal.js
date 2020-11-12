import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem
    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;
    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}> Animal Item </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.activeItem.name}
                onChange={this.handleChange}
                placeholder="Enter Animal Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="species">Species</Label>
              <Input
                type="text"
                name="species"
                value={this.state.activeItem.species}
                onChange={this.handleChange}
                placeholder="Enter Animal Species"
              />
            </FormGroup>
            <FormGroup>
              <Label for="age">Age</Label>
              <Input
                type="text"
                name="age"
                value={this.state.activeItem.age}
                onChange={this.handleChange}
                placeholder="Enter Animal Age"
              />
            </FormGroup>
            <FormGroup>
              <Label for="colors">Colors</Label>
              <Input
                type="text"
                name="colors"
                value={this.state.activeItem.colors}
                onChange={this.handleChange}
                placeholder="Enter Animal Colors"
              />
            </FormGroup>
            <FormGroup check>
              <Label for="extinct">
                <Input
                  type="checkbox"
                  name="extinct"
                  checked={this.state.activeItem.extinct}
                  onChange={this.handleChange}
                />
                Extinct
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={() => onSave(this.state.activeItem)}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}