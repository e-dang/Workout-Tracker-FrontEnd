import {GET_MUSCLES, SELECT_MUSCLES, CLEAR_SELECTED_MUSCLES} from './muscles.type';

const initialState = {
    muscles: [],
    selectedMuscles: [],
    hasInitialMuscles: false,
    isPendingGetMuscles: false,
    error: null,
};

export const musclesReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_MUSCLES.PENDING:
            return {
                ...state,
                isPendingGetMuscles: true,
            };
        case GET_MUSCLES.SUCCESS:
            return {
                ...state,
                isPendingGetMuscles: false,
                hasInitialMuscles: true,
                muscles: action.payload,
            };
        case GET_MUSCLES.ERROR:
            return {
                ...state,
                isPendingGetMuscles: false,
                error: action.payload,
            };
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
