import { cartActions } from "./actions";

export const addCartThunks = (products) => (dispatch, state) => {
  const { cartReduces } = state();

  const localProduct = JSON.parse(localStorage.getItem("cart")) || [];
  localProduct.push(products);
  localStorage.setItem("cart", JSON.stringify(localProduct));

  dispatch(cartActions([...cartReduces, products]));
};

export const removeCartThunks = (id) => (dispatch, state) => {
  const { cartReduces } = state();

  const listNew = cartReduces.filter((ele) => ele.id !== id && ele);
  localStorage.setItem("cart", JSON.stringify(listNew));
  dispatch(cartActions(listNew));
};
