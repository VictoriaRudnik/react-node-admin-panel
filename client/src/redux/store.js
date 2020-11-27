import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";


const configureStore = () => {
  const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

  const middleware = [thunk];
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
  return store
  
}

export const store = configureStore()
