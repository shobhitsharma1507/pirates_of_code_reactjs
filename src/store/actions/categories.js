import {
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
} from "../constants/categories";
import apiRequest from "../../services/apiService";

export const fetchCategoriesAction = ({
  payload,
  successCallback,
  failureCallback,
}) => {
  return async (dispatch) => {
    dispatch({ type: GET_CATEGORIES_REQUEST });
    const { response, error } = await apiRequest({
      method: "GET",
      url: "categories",
      version: "v1",
    });
    if (response) {
      dispatch({ type: GET_CATEGORIES_SUCCESS, payload: response?.data });
      if (successCallback) successCallback();
    } else {
      dispatch({ type: GET_CATEGORIES_FAILURE });
      if (failureCallback) failureCallback();
    }
  };
};
