import {GET_MUSCLES} from './muscles.type';

const initialState = {
    muscles: [],
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
        default:
            return state;
    }
};
