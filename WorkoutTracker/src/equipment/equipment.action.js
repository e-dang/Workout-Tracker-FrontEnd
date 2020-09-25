import {SELECT_EQUIPMENT, REMOVE_SELECTED_EQUIPMENT, CLEAR_SELECTED_EQUIPMENT} from './equipment.type';
import {GET_EQUIPMENT} from '../pagination/pagination.action';
import client from '../api/client';
import {equipmentListSchema} from '../api/schemas/equipment';

export default equipmentActions = {
    listEquipment: (userID, paginationParams = {}) => {
        return client.list(`/users/${userID}/equipment/`, equipmentListSchema, GET_EQUIPMENT, {
            ...paginationParams,
            paginationKey: userID.toString(),
        });
    },
    addSelectedEquipment: (equipment) => async (dispatch) => {
        return dispatch({type: SELECT_EQUIPMENT, payload: equipment});
    },
    removeSelectedEquipment: (equipment) => async (dispatch) => {
        return dispatch({type: REMOVE_SELECTED_EQUIPMENT, payload: equipment});
    },
    clearSelectedEquipment: () => async (dispatch) => {
        return dispatch({type: CLEAR_SELECTED_EQUIPMENT});
    },
};
