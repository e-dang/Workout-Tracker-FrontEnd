import {CREATE_WORKOUT, UPDATE_WORKOUT} from '@workouts/workouts.type';

const initialState = {
    workout: {},
    isPendingCreateWorkout: false,
    isPendingUpdateWorkout: false,
    error: null,
};

export const workoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_WORKOUT.PENDING:
            return {
                ...state,
                isPendingCreateWorkout: true,
                workout: {},
                error: null,
            };
        case CREATE_WORKOUT.SUCCESS:
            return {
                ...state,
                isPendingCreateWorkout: false,
                workout: action.payload,
            };
        case CREATE_WORKOUT.ERROR:
            return {
                ...state,
                isPendingCreateWorkout: false,
                error: action.payload,
            };
        case UPDATE_WORKOUT.PENDING:
            return {
                ...state,
                isPendingUpdateWorkout: true,
                error: null,
            };
        case UPDATE_WORKOUT.SUCCESS:
            return {
                ...state,
                isPendingUpdateWorkout: false,
                workout: action.payload,
            };
        case UPDATE_WORKOUT.ERROR:
            return {
                ...state,
                isPendingUpdateWorkout: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
