import {CREATE_MOVEMENT, DELETE_MOVEMENT} from '@movements/movements.type';

const initialState = {
    isPendingCreateMovement: false,
    isPendingDeleteMovement: false,
    error: null,
};

export const movementReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CREATE_MOVEMENT.PENDING:
            return {
                ...state,
                isPendingCreateMovement: true,
                error: null,
            };
        case CREATE_MOVEMENT.SUCCESS:
            return {
                ...state,
                isPendingCreateMovement: false,
            };
        case CREATE_MOVEMENT.ERROR:
            return {
                ...state,
                isPendingCreateMovement: false,
                error: action.payload,
            };
        case DELETE_MOVEMENT.PENDING:
            return {
                ...state,
                isPendingDeleteMovement: true,
                error: null,
            };
        case DELETE_MOVEMENT.SUCCESS:
            return {
                ...state,
                isPendingDeleteMovement: false,
                movements: state.movements.filter((movement) => movement != action.payload),
            };
        case DELETE_MOVEMENT.ERROR:
            return {
                ...state,
                isPendingDeleteMovement: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
