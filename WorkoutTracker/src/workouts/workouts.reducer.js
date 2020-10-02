import {CREATE_WORKOUT} from '@workouts/workouts.type';

const initialState = {
    workout: undefined,
    isPendingCreateWorkout: false,
    error: null,
};

export const workoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_WORKOUT.PENDING:
            return {
                ...state,
                isPendingCreateWorkout: true,
                workout: undefined,
                error: null,
            };
        case CREATE_WORKOUT.PENDING:
            return {
                ...state,
                isPendingCreateWorkout: false,
                workout: action.payload,
            };
        case CREATE_WORKOUT.PENDING:
            return {
                ...state,
                isPendingCreateWorkout: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
