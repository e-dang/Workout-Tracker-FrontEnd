import {GET_EQUIPMENT} from './equipment.type';

const initialState = {
    equipment: [],
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
        default:
            return state;
    }
};
