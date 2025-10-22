import axios from "axios";

const API_URL = "http://localhost:5000"; // Backend URL

export const signupUser = async ({ name, email, password, role }) => {
  return axios.post(`${API_URL}/api/auth/signup`, { name, email, password, role });
};

export const loginUser = async ({ email, password }) => {
  return axios.post(`${API_URL}/api/auth/login`, { email, password });
};
