import {
    CREATE_WORKOUT_TEMPLATE,
    UPDATE_WORKOUT_TEMPLATE,
    COMMIT_WORKOUT_TEMPLATE,
} from '@workout-templates/workout-templates.type';

import {denormalize} from 'normalizr';
import {workoutTemplateSchema} from '@api';
import {GET_WORKOUT_TEMPLATE} from './workout-templates.type';

const initalState = {
    uncommittedWorkoutTemplate: null,
    isBuildingWorkoutTemplate: false,
    isPendingCreateWorkoutTemplate: false,
    isPendingUpdateWorkoutTemplate: false,
    error: null,
};

export const workoutTemplateReducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_WORKOUT_TEMPLATE.PENDING:
            return {
                ...state,
                isPendingGetWorkoutTemplate: true,
                error: false,
            };
        case GET_WORKOUT_TEMPLATE.SUCCESS:
            return {
                ...state,
                isPendingGetWorkoutTemplate: false,
            };
        case GET_WORKOUT_TEMPLATE.ERROR:
            return {
                ...state,
                isPendingGetWorkoutTemplate: false,
                error: action.payload,
            };
        case CREATE_WORKOUT_TEMPLATE.PENDING:
            return {
                ...state,
                isPendingCreateWorkoutTemplate: true,
                isBuildingWorkoutTemplate: false,
                uncommittedWorkoutTemplate: null,
                error: null,
            };
        case CREATE_WORKOUT_TEMPLATE.SUCCESS:
            return {
                ...state,
                isPendingCreateWorkoutTemplate: false,
                isBuildingWorkoutTemplate: true,
                uncommittedWorkoutTemplate: denormalize(
                    action.payload.result,
                    workoutTemplateSchema,
                    action.payload.entities,
                ),
            };
        case CREATE_WORKOUT_TEMPLATE.ERROR:
            return {
                ...state,
                isPendingCreateWorkoutTemplate: false,
                error: action.payload,
            };
        case UPDATE_WORKOUT_TEMPLATE.PENDING:
            return {
                ...state,
                isPendingUpdateWorkoutTemplate: true,
                error: null,
            };
        case UPDATE_WORKOUT_TEMPLATE.SUCCESS:
            return {
                ...state,
                isPendingUpdateWorkoutTemplate: false,
                uncommittedWorkoutTemplate: action.payload,
            };
        case UPDATE_WORKOUT_TEMPLATE.ERROR:
            return {
                ...state,
                isPendingUpdateWorkoutTemplate: false,
                error: action.payload,
            };
        case COMMIT_WORKOUT_TEMPLATE:
            return {
                uncommittedWorkoutTemplate: null,
                isBuildingWorkoutTemplate: false,
                error: null,
            };
        default:
            return state;
    }
};
