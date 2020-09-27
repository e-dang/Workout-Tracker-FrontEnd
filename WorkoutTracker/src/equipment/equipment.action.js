import {SELECT_EQUIPMENT, REMOVE_SELECTED_EQUIPMENT, CLEAR_SELECTED_EQUIPMENT} from '@equipment/equipment.type';
import {GET_EQUIPMENT} from '@pagination';
import {client, equipmentListSchema} from '@api';

const listEquipment = (userID, paginationParams = {}) => {
    return client.list(`/users/${userID}/equipment/`, equipmentListSchema, GET_EQUIPMENT, {
        ...paginationParams,
        paginationKey: userID.toString(),
    });
};
const addSelectedEquipment = (equipment) => async (dispatch) => {
    return dispatch({type: SELECT_EQUIPMENT, payload: equipment});
};
const removeSelectedEquipment = (equipment) => async (dispatch) => {
    return dispatch({type: REMOVE_SELECTED_EQUIPMENT, payload: equipment});
};
const clearSelectedEquipment = () => async (dispatch) => {
    return dispatch({type: CLEAR_SELECTED_EQUIPMENT});
};

export {listEquipment, addSelectedEquipment, removeSelectedEquipment, clearSelectedEquipment};
