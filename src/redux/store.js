import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import middlewares from "./middlewares";

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
