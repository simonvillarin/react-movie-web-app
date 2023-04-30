import axios from "axios";
import { API_BASE_URL } from "env";

export const buildHeaders = (token) => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

export const register = async (user) => {
  return await axios.post(`${API_BASE_URL}/auth/register`, user);
};

export const login = async (user) => {
  return await axios.post(`${API_BASE_URL}/auth/login`, user);
};

export const getUserId = async () => {
  return await axios.get(`${API_BASE_URL}/auth/id`);
};

export const getUserById = async (id, token) => {
  return await axios.get(`${API_BASE_URL}/user/${id}`, {
    headers: buildHeaders(token),
  });
};

export const updateUser = async (id, user, token) => {
  return await axios.put(`${API_BASE_URL}/user/${id}`, user, {
    headers: buildHeaders(token),
  });
};

export const createSession = (token, user) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
};

export const destroySession = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const getToken = () => {
  let token = localStorage.getItem("token");
  if (token) {
    return token;
  } else {
    return false;
  }
};

export const getCurrentUser = () => {
  let user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  } else {
    return false;
  }
};
