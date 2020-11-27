import {brandsApi} from "../../api/brandsApi"

export const GET_FILTERED_BRAND_LIST = 'GET_FILTERED_BRAND_LIST'; 



export const getFilteredBrandList = (searchString) => async dispatch => {
  const collectives = await brandsApi.getFilteredBrands(searchString);
  dispatch({type: GET_FILTERED_BRAND_LIST, collectives})
};
