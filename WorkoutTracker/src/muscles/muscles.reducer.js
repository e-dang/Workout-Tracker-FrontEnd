import {SELECT_MUSCLES, CLEAR_SELECTED_MUSCLES} from './muscles.type';

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
        case CLEAR_SELECTED_MUSCLES:
            return {
                ...state,
                selectedMuscles: [],
            };
        default:
            return state;
    }
};
