import React, { Component } from "react";
import { Container, Button, Table } from "reactstrap";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";
import { getItems } from "../actions/itemActions";
import PropTypes from "prop-types";

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { items } = this.props.item;

    return (
      <Container>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={() => {
            const name = prompt("Enter item");
            const price = prompt("Enter price");
            const amount = prompt("Enter amount");
            if (name) {
              this.setState(state => ({
                items: [...state.items, { id: uuid(), name, price, amount }]
              }));
            }
          }}
        >
          Lägg till vara
        </Button>

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
                    onClick={() => {
                      this.setState(state => ({
                        items: state.items.filter(item => item.id !== id)
                      }));
                    }}
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

export default connect(mapStateToProps, { getItems })(ShoppingList);
