import {SELECT_MUSCLES, CLEAR_SELECTED_MUSCLES} from './muscles.type';
import {GET_MUSCLES} from '../pagination/pagination.action';
import client from '../api/client';
import {muscleListSchema} from '../api/schemas/muscles';

export default muscleActions = {
    listMuscles: (paginationParams = {}) => {
        return client.list('muscles/', muscleListSchema, GET_MUSCLES, {...paginationParams, paginationKey: '1'});
    },
    addSelectedMuscles: (muscles) => async (dispatch) => {
        return dispatch({type: SELECT_MUSCLES, payload: muscles});
    },
    clearSelectedMuscles: () => async (dispatch) => {
        return dispatch({type: CLEAR_SELECTED_MUSCLES});
    },
};
