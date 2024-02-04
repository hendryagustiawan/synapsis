import { GET_USER_LIST, GET_POST_BY_ID } from "../types";

const initialState = {
  userList: [],
  detailPost: {},
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USER_LIST:
      return { ...state, userList: payload };
    case GET_POST_BY_ID:
      return { ...state, detailPost: payload };

    default:
      return state;
  }
};

export default userReducer;
