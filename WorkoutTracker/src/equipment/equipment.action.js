import {SELECT_EQUIPMENT, CLEAR_SELECTED_EQUIPMENT} from './equipment.type';
import {GET_EQUIPMENT} from '../pagination/pagination.action';
import client from '../api/client';
import {equipmentListSchema} from '../api/schemas/equipment';

export const addSelectedEquipment = (equipment) => async (dispatch) => {
    return dispatch({type: SELECT_EQUIPMENT, payload: equipment});
};

export const clearSelectedEquipment = () => async (dispatch) => {
    return dispatch({type: CLEAR_SELECTED_EQUIPMENT});
};

export const equipmentActions = {
    listEquipment: (userID, paginationParams = {}) => {
        return client.list(`/users/${userID}/equipment/`, equipmentListSchema, GET_EQUIPMENT, {
            ...paginationParams,
            paginationKey: userID.toString(),
        });
    },
};
