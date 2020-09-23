import {GET_MOVEMENTS, CREATE_MOVEMENT} from './movements.type';
import {api} from '../api';
import {extractRelatedObjLink} from '../utils/action-helpers';

export const getMovements = () => async (dispatch, getState) => {
    const authState = getState().auth;

    dispatch({type: GET_MOVEMENTS.PENDING});
    return api
        .getMovements(authState.user.pk, authState.authToken)
        .then((resp) => {
            dispatch({type: GET_MOVEMENTS.SUCCESS, payload: resp.data.results});
        })
        .catch((err) => {
            dispatch({type: GET_MOVEMENTS.FAILURE, payload: err.response.status});
        });
};

export const createMovement = (name, equipment, muscles) => async (dispatch, getState) => {
    const authState = getState().auth;

    dispatch({type: CREATE_MOVEMENT.PENDING});
    return api
        .createMovement(authState.user.pk, authState.authToken, {
            name,
            equipment: extractRelatedObjLink(equipment),
            muscles: extractRelatedObjLink(muscles),
        })
        .then((resp) => {
            dispatch({type: CREATE_MOVEMENT.SUCCESS, payload: resp.data});
        })
        .catch((err) => {
            dispatch({type: CREATE_MOVEMENT.FAILURE, payload: err.response.status});
            throw err;
        });
};
