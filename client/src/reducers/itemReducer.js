import { v4 as uuid } from "uuid";
import { GET_ITEMS, ADD_ITEMs, DELETE_ITEM } from "../actions/types";

const initialState = {
  items: [
    { id: uuid(), name: "Ägg 6p", price: 18, amount: 2 },
    { id: uuid(), name: "Bröd", price: 24 },
    { id: uuid(), name: "Mjölk 1,5L", price: 15, amount: 2 }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    default:
      return state;
  }
}
