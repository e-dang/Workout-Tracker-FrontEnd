import {GET_MUSCLES, SELECT_MUSCLES, CLEAR_SELECTED_MUSCLES} from './muscles.type';
import {api} from '../api';

export const getMuscles = () => async (dispatch, getState) => {
    const authToken = getState().auth.authToken;

    dispatch({type: GET_MUSCLES.PENDING});
    return api
        .getMuscles(authToken)
        .then((resp) => {
            dispatch({type: GET_MUSCLES.SUCCESS, payload: resp.data.results});
        })
        .catch((err) => {
            console.log(err.response.status);
            dispatch({type: GET_MUSCLES.ERROR, payload: err.response.status});
        });
};

export const addSelectedMuscles = (muscles) => async (dispatch) => {
    return dispatch({type: SELECT_MUSCLES, payload: muscles});
};

export const clearSelectedMuscles = () => async (dispatch) => {
    return dispatch({type: CLEAR_SELECTED_MUSCLES});
};
