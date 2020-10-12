import {combineReducers} from 'redux';
import * as Actions from '@pagination/pagination.action';

const initialState = {
    ids: [],
    isFetching: false,
    nextPageURL: null,
    pageCount: 0,
};

const paginate = (actionType) => {
    const updatePagination = (state = initialState, action) => {
        switch (action.type) {
            case actionType.PENDING:
                return {
                    ...state,
                    isFetching: true,
                };
            case actionType.RESET:
                return initialState;
            case actionType.SUCCESS:
                return {
                    ...state,
                    ids: [...state.ids, ...action.payload.pagination.ids],
                    isFetching: false,
                    nextPageURL: action.payload.pagination.nextPageURL,
                    pageCount: state.pageCount + 1,
                };
            case actionType.ERROR:
                return {
                    ...state,
                    isFetching: false,
                };
            default:
                state;
        }
    };

    return (state = {}, action) => {
        switch (action.type) {
            case actionType.PENDING:
            case actionType.RESET:
            case actionType.SUCCESS:
            case actionType.ERROR:
                const key = action.id;

                return {
                    ...state,
                    [key]: updatePagination(state[key], action),
                };
            default:
                return state;
        }
    };
};

export const paginationReducer = combineReducers({
    GET_MUSCLES: paginate(Actions.GET_MUSCLES),
    GET_EQUIPMENT: paginate(Actions.GET_EQUIPMENT),
    GET_MOVEMENTS: paginate(Actions.GET_MOVEMENTS),
});
