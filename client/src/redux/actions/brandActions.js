import {brandsApi} from "../../api/brandsApi"

export const GET_BRAND_LIST = 'GET_BRAND_LIST'; 

export const getBrandList = () => async dispatch => {
   const collectives = await brandsApi.getBrands();
  return dispatch({type: GET_BRAND_LIST, collectives})
};
