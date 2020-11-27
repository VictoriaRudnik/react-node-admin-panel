import { combineReducers } from "redux";
import { brandReducer } from "./reducers/brandReducer";
import {userReducer} from "./reducers/userReducer";
// import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  brand: brandReducer,
  user: userReducer,
  // form: formReducer,
});

export default rootReducer;
