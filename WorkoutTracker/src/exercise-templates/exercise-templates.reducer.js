import {CREATE_EXERCISE_TEMPLATE} from '@exercise-templates/exercise-templates.action';

const initialState = {
    isPendingCreateExerciseTemplate: false,
    error: null,
};

export const exerciseTemplateReducer = (state = initialState, action) => {
    switch (action.TYPE) {
        case CREATE_EXERCISE_TEMPLATE.PENDING:
            return {
                ...state,
                isPendingCreateExerciseTemplate: true,
                error: null,
            };
        case CREATE_EXERCISE_TEMPLATE.SUCCESS:
            return {
                ...state,
                isPendingCreateExerciseTemplate: false,
            };
        case CREATE_EXERCISE_TEMPLATE.ERROR:
            return {
                ...state,
                isPendingCreateExerciseTemplate: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
