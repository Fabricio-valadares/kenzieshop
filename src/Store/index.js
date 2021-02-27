import { createStore, combineReducers, applyMiddleware } from "redux";
import { cartReduces } from "./modules/Cart/reduces";
import thunk from "redux-thunk";

const reduces = combineReducers({
  cartReduces: cartReduces,
});

const store = createStore(reduces, applyMiddleware(thunk));

export default store;
