import {SELECT_MUSCLES, REMOVE_SELECTED_MUSCLE, CLEAR_SELECTED_MUSCLES} from '@muscles/muscles.type';
import {GET_MUSCLES} from '@pagination';
import {client, muscleListSchema} from '@api';

const listMuscles = (paginationParams = {}) => {
    return client.list('muscles/', muscleListSchema, GET_MUSCLES, {...paginationParams, paginationKey: '1'});
};

const addSelectedMuscles = (muscles) => async (dispatch) => {
    return dispatch({type: SELECT_MUSCLES, payload: muscles});
};

const removeSelectedMuscle = (muscle) => async (dispatch) => {
    return dispatch({type: REMOVE_SELECTED_MUSCLE, payload: muscle});
};

const clearSelectedMuscles = () => async (dispatch) => {
    return dispatch({type: CLEAR_SELECTED_MUSCLES});
};

export {listMuscles, addSelectedMuscles, removeSelectedMuscle, clearSelectedMuscles};
