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

  render() {
    const { toggle, onDone } = this.props;
    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}> Animal Details </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label>Name:</Label>
              <Label>{this.state.activeItem.name}</Label>
            </FormGroup>
            <FormGroup>
              <Label>Species:</Label>
              <Label>{this.state.activeItem.species}</Label>
            </FormGroup>
            <FormGroup>
              <Label>Age:</Label>
              <Label>{this.state.activeItem.age}</Label>
            </FormGroup>
            <FormGroup>
              <Label>Colors:</Label>
              <Label>{this.state.activeItem.colors}</Label>
            </FormGroup>
            <FormGroup check>
              <Label>
                <Input
                  type="checkbox"
                  name="extinct"
                  checked={this.state.activeItem.extinct}
                />
                Extinct
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={() => onDone(this.state.activeItem)}>
            Done
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}