import {GET_EQUIPMENT, SELECT_EQUIPMENT, CLEAR_SELECTED_EQUIPMENT} from './equipment.type';

const initialState = {
    equipment: [],
    selectedEquipment: [],
    hasInitialEquipment: false,
    isPendingGetEquipment: false,
    error: null,
};

export const equipmentReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_EQUIPMENT.PENDING:
            return {
                ...state,
                isPendingGetEquipment: true,
                error: null,
            };
        case GET_EQUIPMENT.SUCCESS:
            return {
                ...state,
                isPendingGetEquipment: false,
                hasInitialEquipment: true,
                equipment: action.payload,
            };
        case GET_EQUIPMENT.FAILURE:
            return {
                ...state,
                isPendingGetEquipment: false,
                error: action.payload,
            };
        case SELECT_EQUIPMENT:
            return {
                ...state,
                selectedEquipment: action.payload,
            };
        case CLEAR_SELECTED_EQUIPMENT:
            return {
                ...state,
                selectedEquipment: [],
            };
        default:
            return state;
    }
};
