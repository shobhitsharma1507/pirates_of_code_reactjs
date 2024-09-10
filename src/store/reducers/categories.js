import {
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
} from "../constants/categories";

const initialState = {
  categories: [],
  isLoading: false,
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action?.type) {
    case GET_CATEGORIES_REQUEST:
      return { ...state, isLoading: true };
    case GET_CATEGORIES_SUCCESS:
      return { ...state, isLoading: false, categories: action?.payload };
    case GET_CATEGORIES_FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
