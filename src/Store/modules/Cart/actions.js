import { ADD_CART } from "./actionsType";

export const cartActions = (product) => ({
  type: ADD_CART,
  product,
});
