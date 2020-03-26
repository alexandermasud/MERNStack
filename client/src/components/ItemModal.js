import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";

class ItemModal extends Component {
  state = { modal: false, name: "", price: 0, amount: 1 };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.name,
      price: this.state.price,
      amount: this.state.amount
    };

    // Add item via addItem action
    this.props.addItem(newItem);
    // Close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button color="dark" className="float-right" onClick={this.toggle}>
          Lägg till vara
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Lägg till vara</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Namn</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Lägg till vara"
                  onChange={this.onChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="price">Pris</Label>
                <Input
                  type="number"
                  name="price"
                  id="price"
                  placeholder="Lägg till pris (frivilligt)"
                  onChange={this.onChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="amount">Antal</Label>
                <Input
                  type="number"
                  name="amount"
                  id="amount"
                  defaultValue="1"
                  onChange={this.onChange}
                ></Input>
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Lägg till vara
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});
export default connect(mapStateToProps, { addItem })(ItemModal);
