import {SELECT_MUSCLES, REMOVE_SELECTED_MUSCLE, CLEAR_SELECTED_MUSCLES} from './muscles.type';

const initialState = {
    selectedMuscles: [],
};

export const musclesReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SELECT_MUSCLES:
            return {
                ...state,
                selectedMuscles: action.payload,
            };
        case REMOVE_SELECTED_MUSCLE:
            return {
                ...state,
                selectedMuscles: state.selectedMuscles.filter((item) => item.name != action.payload),
            };
        case CLEAR_SELECTED_MUSCLES:
            return {
                ...state,
                selectedMuscles: [],
            };
        default:
            return state;
    }
};
