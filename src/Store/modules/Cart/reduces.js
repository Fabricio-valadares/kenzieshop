import { ADD_CART } from "./actionsType";
const itemProductLocal = JSON.parse(localStorage.getItem("cart")) || [];

export const cartReduces = (state = itemProductLocal, actions) => {
  switch (actions.type) {
    case ADD_CART:
      return actions.product;
    default:
      return state;
  }
};
