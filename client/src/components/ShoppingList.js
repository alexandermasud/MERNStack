import React, { Component } from "react";
import { Container, Button, Table } from "reactstrap";

import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.item;

    return (
      <Container>
        <Table borderless>
          <thead>
            <tr>
              <th>Namn</th>
              <th>Pris</th>
              <th>Antal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map(({ id, name, price, amount }) => (
              <tr key={id}>
                <th>{name}</th>
                <th>{price}</th>
                <th>{amount}</th>
                <th>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, id)}
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
