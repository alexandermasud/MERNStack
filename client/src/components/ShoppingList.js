import React, { Component } from "react";
import { Container, Button, Table } from "reactstrap";

import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = _id => {
    this.props.deleteItem(_id);
  };

  render() {
    const { items } = this.props.item;

    return (
      <Container>
        <Table borderless>
          <thead>
            <tr>
              <th>Namn</th>
              <th>Antal</th>
              <th>Pris</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map(({ _id, name, price, amount }) => (
              <tr key={_id}>
                <th>{name}</th>
                <th>{amount}</th>
                <th>{price * amount}</th>
                <th>
                  <Button
                    className="remove-btn float-right"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >
                    &times;
                  </Button>
                </th>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

ShoppingList.protoTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);
