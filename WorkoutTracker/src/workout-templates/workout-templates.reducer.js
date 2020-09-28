import {CREATE_WORKOUT_TEMPLATE} from '@workout-templates/workout-templates.type';

const initalState = {
    isPendingCreateWorkoutTemplate: false,
    error: null,
};

export const workoutTemplateReducer = (state = initalState, action) => {
    switch (action.type) {
        case CREATE_WORKOUT_TEMPLATE.PENDING:
            return {
                ...state,
                isPendingCreateWorkoutTemplate: true,
            };
        case CREATE_WORKOUT_TEMPLATE.SUCCESS:
            return {
                ...state,
                isPendingCreateWorkoutTemplate: false,
            };
        case CREATE_WORKOUT_TEMPLATE.ERROR:
            return {
                ...state,
                isPendingCreateWorkoutTemplate: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
