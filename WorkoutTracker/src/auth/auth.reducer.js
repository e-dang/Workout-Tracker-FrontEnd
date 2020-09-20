import {LOGIN, LOGOUT, GET_AUTH_USER, REGISTER} from './auth.type';

const initialState = {
    isLoggingIn: false,
    isLoggingOut: false,
    isRegistering: false,
    isAuthenticated: false,
    hasInitialUser: false,
    isPendingUser: false,
    user: {},
    authToken: null,
    error: null,
};

export const authReducer = (prevState = initialState, action = {}) => {
    switch (action.type) {
        case LOGIN.PENDING:
            return {
                ...prevState,
                isLoggingIn: true,
                error: null,
            };
        case LOGIN.SUCCESS:
            return {
                ...prevState,
                isLoggingIn: false,
                isAuthenticated: true,
                authToken: action.payload,
            };
        case LOGIN.ERROR:
            return {
                ...prevState,
                isLoggingIn: false,
                isAuthenticated: false,
                error: action.payload,
            };
        case LOGOUT.PENDING:
            return {
                ...prevState,
                isLoggingOut: true,
                error: null,
            };
        case LOGOUT.SUCCESS:
            return {
                ...prevState,
                isLoggingOut: false,
                isAuthenticated: false,
                hasInitialUser: false,
                authToken: null,
                user: {},
            };
        case LOGOUT.ERROR:
            return {
                ...prevState,
                isLoggingOut: false,
                error: action.payload,
            };
        case GET_AUTH_USER.PENDING:
            return {
                ...prevState,
                isPendingUser: true,
                error: null,
            };
        case GET_AUTH_USER.SUCCESS:
            return {
                ...prevState,
                isPendingUser: false,
                hasInitialUser: true,
                user: action.payload,
            };
        case GET_AUTH_USER.ERROR:
            return {
                ...prevState,
                isPendingUser: false,
                hasInitialUser: false,
                error: action.payload,
            };
        case REGISTER.PENDING:
            return {
                ...prevState,
                isRegistering: true,
                error: null,
            };
        case REGISTER.SUCCESS:
            return {
                ...prevState,
                isRegistering: false,
                isAuthenticated: true,
                authToken: action.payload,
            };
        case REGISTER.ERROR:
            return {
                ...prevState,
                isRegistering: false,
                error: action.payload,
            };
        default:
            return prevState;
    }
};
