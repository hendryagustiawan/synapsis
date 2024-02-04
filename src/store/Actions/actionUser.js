import axios from "axios";
import { GET_USER_LIST } from "../types";
import { errorMsg, successMsg } from "../../lib/toastNotification";

const baseURL = "https://gorest.co.in/public/v2/users";
const access_token = "f86ae7d4905c72625e56f29d423b1c102a3890d57305d9df8fa9583e95b8f849";

export const getUserList = (searchName, currentPage) => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${baseURL}?name=${searchName}&page=${currentPage}&per_page=5`, {
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    });

    dispatch({
      type: GET_USER_LIST,
      payload: response.data,
    });
  } catch (error) {
    errorMsg(error);
  }
};

export const addUser = (input) => async (dispatch, getState) => {
  try {
    const response = await axios.post(`${baseURL}`, input, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    });

    successMsg();
  } catch (error) {
    errorMsg(error.response.data[0].message);
  }
};

export const editUser = (input, id) => async (dispatch, getState) => {
  try {
    const response = await axios.put(`${baseURL}/${id}`, input, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    });

    successMsg();
  } catch (error) {
    console.log(error);
    errorMsg(error);
  }
};

export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    const response = await axios.delete(`${baseURL}/${id}`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    });

    successMsg();
  } catch (error) {
    errorMsg(error);
  }
};
