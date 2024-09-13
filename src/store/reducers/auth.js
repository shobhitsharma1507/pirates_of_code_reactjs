import {
    USER_LOGIN_FAILURE,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_SIGNUP_FAILURE,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
} from "../constants/auth";

const initialState = {
    userDetails: {},
    isLoading: false,
    message: "",
};

export const authReducer = (state = initialState, action) => {
    switch (action?.type) {
        case USER_LOGIN_REQUEST:
            return { ...state, isLoading: true };
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userDetails: action?.payload,
            };
        case USER_LOGIN_FAILURE:
            return { ...state, isLoading: false };

        case USER_SIGNUP_REQUEST:
            return { ...state, isLoading: true };
        case USER_SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                // userDetails: action?.payload,
                message: action?.payload,
            };
        case USER_SIGNUP_FAILURE:
            return {
                ...state,
                isLoading: false,
                message: action?.payload,
            };
        default:
            return state;
    }
};
