import axios from "axios";
import { API_BASE_URL } from "env";
import { buildHeaders } from "./UserService";

export const getUserListById = async (id, token) => {
  return await axios.get(`${API_BASE_URL}/userlist/${id}`, {
    headers: buildHeaders(token),
  });
};

export const getShowByShowId = async (id, token) => {
  return await axios.get(`${API_BASE_URL}/userlist/show/${id}`, {
    headers: buildHeaders(token),
  });
};

export const addUserList = async (id, userList, token) => {
  return await axios.post(`${API_BASE_URL}/userlist/${id}`, userList, {
    headers: buildHeaders(token),
  });
};

export const removeUserList = async (id, token) => {
  return await axios.delete(`${API_BASE_URL}/userlist/${id}`, {
    headers: buildHeaders(token),
  });
};
