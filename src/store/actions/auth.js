import {
    USER_LOGIN_FAILURE,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_SIGNUP_FAILURE,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
} from "../constants/auth";
import apiRequest from "../../services/apiService";

export const userLoginAction = ({
    payload,
    successCallback,
    failureCallback,
}) => {
    return async (dispatch) => {
        dispatch({ type: USER_LOGIN_REQUEST });
        const { response, error } = await apiRequest({
            method: "POST",
            url: "auth/login",
            version: "v1",
            data: payload,
        });

        if (response?.status === 200) {
            dispatch({ type: USER_LOGIN_SUCCESS, payload: response?.data });
            if (successCallback) successCallback();
        } else {
            dispatch({ type: USER_LOGIN_FAILURE });
            if (failureCallback) failureCallback();
        }
    };
};

export const userSignupAction = ({
    payload,
    successCallback,
    failureCallback,
}) => {
    return async (dispatch) => {
        dispatch({ type: USER_SIGNUP_REQUEST });
        const { response, error } = await apiRequest({
            method: "POST",
            url: "auth/signup",
            version: "v1",
            data: payload, //{ email: payload?.email, password: payload?.password }
        });

        if (response?.status === 201) {
            dispatch({ type: USER_SIGNUP_SUCCESS, payload: response?.data });
            if (successCallback) successCallback();
        } else {
            dispatch({ type: USER_SIGNUP_FAILURE, payload: response.data });
            if (failureCallback) failureCallback();
        }
    };
};
