import {CREATE_WORKOUT} from '@workouts/workouts.type';
import {extractRelatedObjLink, getAuthToken} from '@utils';
import axios from 'axios';
import {constructHeader} from '@api';

export const createWorkout = (workoutTemplate) => async (dispatch, getState) => {
    dispatch({type: CREATE_WORKOUT.PENDING});

    const authToken = getAuthToken(getState);
    return axios
        .post(extractRelatedObjLink(workoutTemplate).concat('create-workout/'), {}, constructHeader(authToken))
        .then((resp) => {
            dispatch({type: CREATE_WORKOUT.SUCCESS, payload: resp.data});
        })
        .catch((err) => {
            dispatch({type: CREATE_WORKOUT.ERROR, payload: err.response.data});
        });
};