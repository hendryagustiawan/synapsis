import { GET_POST_LIST, GET_POST_BY_ID } from "../types";

const initialState = {
  postList: [],
  detailPost: {},
};

const postReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_POST_LIST:
      return { ...state, postList: payload };
    case GET_POST_BY_ID:
      return { ...state, detailPost: payload };

    default:
      return state;
  }
};

export default postReducer;
