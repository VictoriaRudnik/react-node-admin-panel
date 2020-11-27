import axios from "axios";

const SERVER_URL = "http://localhost:3001";

export const getHelper = (query) => {
  return axios
    .get(`${SERVER_URL}/${query}`)
    .then((response) => response.data)
    .catch((e) => {
      throw e;
    });
};

export const postHelper = (query, params) => {
  return axios
    .post(`${SERVER_URL}/${query}`, params)
    .then((response) => response.data)
    .catch((e) => {
      throw e;
    });
};
