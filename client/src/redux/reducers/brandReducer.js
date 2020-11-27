import { GET_BRAND_LIST } from "../actions/brandActions";
import {GET_FILTERED_BRAND_LIST} from "../actions/brandFilteredAction";

const initialState = {
  brandList: [],
};

export const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BRAND_LIST:
      return Object.assign({}, state, {
        brandList: action.collectives,
      });
    case GET_FILTERED_BRAND_LIST:
      return Object.assign({}, state, {
        brandList: action.collectives,
      });
    default:
      return state;
  }
 };
