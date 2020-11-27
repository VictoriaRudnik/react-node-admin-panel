import { postHelper } from "../helpers/apiHelper";

const authApi = {
  login: (email, password) => postHelper("login", { email, password }),
};

export { authApi };
