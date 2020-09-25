import {SELECT_EQUIPMENT, CLEAR_SELECTED_EQUIPMENT, REMOVE_SELECTED_EQUIPMENT} from './equipment.type';

const initialState = {
    selectedEquipment: [],
    error: null,
};

export const equipmentReducer = (state = initialState, action = {}) => {
    switch (action.type) {
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
