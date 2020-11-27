import { authApi } from "../../api/authApi";

export const IS_AUTHORIZED = "IS_AUTHORIZED";

export const setAuthorize = (email, password) => async (dispatch) => {
  const isAuthorized = await authApi.login(email, password);
  dispatch({
    type: IS_AUTHORIZED,
    isAuthorized: isAuthorized,
  });
};
