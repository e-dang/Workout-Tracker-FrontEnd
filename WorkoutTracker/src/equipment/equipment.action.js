import {GET_EQUIPMENT} from './equipment.type';
import {api} from '../api';

export const getEquipment = () => async (dispatch, getState) => {
    const authState = getState().auth;

    dispatch({type: GET_EQUIPMENT.PENDING});
    return api
        .getEquipment(authState.user.pk, authState.authToken)
        .then((resp) => {
            dispatch({type: GET_EQUIPMENT.SUCCESS, payload: resp.data.results});
        })
        .catch((err) => {
            dispatch({type: GET_EQUIPMENT.FAILURE, payload: err.response.status});
        });
};
