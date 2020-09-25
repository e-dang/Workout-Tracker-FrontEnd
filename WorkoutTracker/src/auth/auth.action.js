import {LOGIN, LOGOUT, GET_AUTH_USER, REGISTER} from '@auth/auth.type';
import {client} from '@api';

function extractAuthKey(response) {
    return response.data.key;
}

export const login = (username, password) => async (dispatch) => {
    dispatch({type: LOGIN.PENDING});
    return client
        .login(username, password)
        .then((resp) => {
            dispatch({type: LOGIN.SUCCESS, payload: extractAuthKey(resp)});
        })
        .catch((err) => {
            dispatch({type: LOGIN.ERROR, payload: err.response.status});
            throw err;
        });
};

export const logout = () => async (dispatch, getState) => {
    const authToken = getState().auth.authToken;

    if (authToken == null) return Promise.resolve();

    dispatch({type: LOGOUT.PENDING});
    return client
        .logout(authToken)
        .then((resp) => {
            dispatch({type: LOGOUT.SUCCESS});
        })
        .catch((err) => {
            dispatch({type: LOGOUT.ERROR, payload: err.response.status});
            throw err;
        });
};

export const getAuthUser = () => async (dispatch, getState) => {
    const authToken = getState().auth.authToken;

    if (authToken == null) return Promise.resolve();

    dispatch({type: GET_AUTH_USER.PENDING});
    return client
        .getAuthUser(authToken)
        .then((resp) => {
            dispatch({type: GET_AUTH_USER.SUCCESS, payload: resp.data});
        })
        .catch((err) => {
            dispatch({type: GET_AUTH_USER.ERROR, payload: err.response.status});
            throw err;
        });
};

export const register = (username, password, confirmPassword) => async (dispatch) => {
    dispatch({type: REGISTER.PENDING});
    return client
        .register(username, password, confirmPassword)
        .then((resp) => {
            dispatch({type: REGISTER.SUCCESS, payload: extractAuthKey(resp)});
        })
        .catch((err) => {
            dispatch({type: REGISTER.ERROR, payload: err.response.data});
            throw err;
        });
};
