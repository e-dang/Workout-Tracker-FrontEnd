import {GET_EQUIPMENT, SELECT_EQUIPMENT, CLEAR_SELECTED_EQUIPMENT} from './equipment.type';
import {api} from '../api';

export const getEquipment = () => async (dispatch, getState) => {
    const authState = getState().auth;

    dispatch({type: GET_EQUIPMENT.PENDING});
    return api
        .getEquipment(authState.user.id, authState.authToken)
        .then((resp) => {
            dispatch({type: GET_EQUIPMENT.SUCCESS, payload: resp.data.results});
        })
        .catch((err) => {
            dispatch({type: GET_EQUIPMENT.FAILURE, payload: err.response.status});
        });
};

export const addSelectedEquipment = (equipment) => async (dispatch) => {
    return dispatch({type: SELECT_EQUIPMENT, payload: equipment});
};

export const clearSelectedEquipment = () => async (dispatch) => {
    return dispatch({type: CLEAR_SELECTED_EQUIPMENT});
};
