import {GET_MOVEMENTS, CREATE_MOVEMENT, DELETE_MOVEMENT} from './movements.type';

const initialState = {
    movements: [],
    hasInitialMovements: false,
    isPendingGetMovements: false,
    isPendingCreateMovement: false,
    isPendingDeleteMovement: false,
    error: null,
};

export const movementReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_MOVEMENTS.PENDING:
            return {
                ...state,
                isPendingGetMovements: true,
                error: null,
            };
        case GET_MOVEMENTS.SUCCESS:
            return {
                ...state,
                isPendingGetMovements: false,
                hasInitialMovements: true,
                movements: action.payload,
            };
        case GET_MOVEMENTS.FAILURE:
            return {
                ...state,
                isPendingGetMovements: false,
                error: action.payload,
            };
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
                movements: [...state.movements, action.payload],
            };
        case CREATE_MOVEMENT.FAILURE:
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
        case DELETE_MOVEMENT.FAILURE:
            return {
                ...state,
                isPendingDeleteMovement: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
