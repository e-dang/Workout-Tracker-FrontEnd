import {
    GET_WORKOUT_TEMPLATE,
    CREATE_WORKOUT_TEMPLATE,
    UPDATE_WORKOUT_TEMPLATE,
    COMMIT_WORKOUT_TEMPLATE,
    REFRESH_WORKOUT_TEMPLATE,
    DELETE_WORKOUT_TEMPLATE,
} from '@workout-templates/workout-templates.type';

import {denormalize} from 'normalizr';
import {workoutTemplateSchema} from '@api';

const initalState = {
    uncommittedWorkoutTemplate: null,
    isBuildingWorkoutTemplate: false,
    isPendingGetWorkoutTemplate: false,
    isPendingCreateWorkoutTemplate: false,
    isPendingUpdateWorkoutTemplate: false,
    isPendingRefreshWorkoutTemplate: false,
    isPendingDeleteWorkoutTemplate: false,
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
        case REFRESH_WORKOUT_TEMPLATE.PENDING:
            return {
                ...state,
                isPendingRefreshWorkoutTemplate: true,
                error: false,
            };
        case REFRESH_WORKOUT_TEMPLATE.SUCCESS:
            return {
                ...state,
                isPendingRefreshWorkoutTemplate: false,
                uncommittedWorkoutTemplate: denormalize(
                    action.payload.result,
                    workoutTemplateSchema,
                    action.payload.entities,
                ),
            };
        case REFRESH_WORKOUT_TEMPLATE.ERROR:
            return {
                ...state,
                isPendingRefreshWorkoutTemplate: false,
                error: action.payload,
            };
        case COMMIT_WORKOUT_TEMPLATE:
            return {
                ...state,
                uncommittedWorkoutTemplate: null,
                isBuildingWorkoutTemplate: false,
                error: null,
            };
        case DELETE_WORKOUT_TEMPLATE.PENDING:
            return {
                ...state,
                isPendingDeleteWorkoutTemplate: true,
                error: null,
            };
        case DELETE_WORKOUT_TEMPLATE.SUCCESS:
            return {
                ...state,
                isPendingDeleteWorkoutTemplate: false,
            };
        case DELETE_WORKOUT_TEMPLATE.ERROR:
            return {
                ...state,
                isPendingDeleteWorkoutTemplate: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
