import {
    CREATE_EQUIPMENT,
    SELECT_EQUIPMENT,
    CLEAR_SELECTED_EQUIPMENT,
    REMOVE_SELECTED_EQUIPMENT,
} from '@equipment/equipment.type';

const initialState = {
    selectedEquipment: [],
    isPendingCreateEquipment: false,
    error: null,
};

export const equipmentReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CREATE_EQUIPMENT.PENDING:
            return {
                ...state,
                isPendingCreateEquipment: true,
            };
        case CREATE_EQUIPMENT.SUCCESS:
            return {
                ...state,
                isPendingCreateEquipment: false,
            };
        case CREATE_EQUIPMENT.ERROR:
            return {
                ...state,
                isPendingCreateEquipment: false,
                error: action.payload,
            };
        case SELECT_EQUIPMENT:
            return {
                ...state,
                selectedEquipment: action.payload,
            };
        case REMOVE_SELECTED_EQUIPMENT:
            return {
                ...state,
                selectedEquipment: state.selectedEquipment.filter((item) => item.name != action.payload),
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
