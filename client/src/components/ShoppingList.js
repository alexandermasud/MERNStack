import React, { Component } from "react";
import { Container, Button, Table } from "reactstrap";
import { v4 as uuid } from "uuid";

class ShoppingList extends Component {
  state = {
    items: [
      { id: uuid(), name: "Ägg 6p", price: 18, amount: 2 },
      { id: uuid(), name: "Bröd", price: 24 },
      { id: uuid(), name: "Mjölk 1,5L", price: 15, amount: 2 }
    ]
  };

  render() {
    const { items } = this.state;

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
          Add item
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

export default ShoppingList;
