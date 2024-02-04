import axios from "axios";
import { GET_POST_LIST, GET_POST_BY_ID } from "../types";
import { errorMsg } from "../../lib/toastNotification";

const baseURL = "https://gorest.co.in/public/v2/posts";
const access_token = "f86ae7d4905c72625e56f29d423b1c102a3890d57305d9df8fa9583e95b8f849";

export const getPostList = (currentPage) => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${baseURL}?page=${currentPage}&per_page=5`, {
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    });

    dispatch({
      type: GET_POST_LIST,
      payload: response.data,
    });
  } catch (error) {
    errorMsg(error);
  }
};

export const getPostById = (id) => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${baseURL}/${id}`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    });

    dispatch({
      type: GET_POST_BY_ID,
      payload: response.data,
    });
  } catch (error) {
    errorMsg(error);
  }
};
