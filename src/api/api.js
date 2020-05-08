import axios from "axios";

const url = "http://203.154.59.14:3000/api/v1";

export const getUser = () => {
  return new Promise((resolve, reject) => {
    axios.get(url + "/users").then((res) => {
      resolve(res.data);
    });
  });
};

export const createUser = (user) => {
  return new Promise((resolve, reject) => {
    axios.post(url + "/users").then((res) => {
      resolve(res.data);
    });
  });
};

export const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    axios.get(url + "/products").then((res) => {
      resolve(res.data);
    });
  });
};

export const loginUser = (user) => {
  return new Promise((resolve, reject) => {
    axios.post(url + "/login", user).then((res) => {
      resolve(res.data);
    });
  });
};

export const registerUser = (user) => {
  return new Promise((resolve, reject) => {
    axios.post(url + "/register", user).then((res) => {
      resolve(res.data);
    });
  });
};
