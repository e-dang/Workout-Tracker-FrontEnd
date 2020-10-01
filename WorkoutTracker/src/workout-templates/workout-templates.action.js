import {
    GET_WORKOUT_TEMPLATE,
    CREATE_WORKOUT_TEMPLATE,
    UPDATE_WORKOUT_TEMPLATE,
    REFRESH_WORKOUT_TEMPLATE,
    COMMIT_WORKOUT_TEMPLATE,
    DELETE_WORKOUT_TEMPLATE,
} from '@workout-templates/workout-templates.type';
import {GET_WORKOUT_TEMPLATES} from '@pagination';
import {client, workoutTemplateSchema, workoutTemplateListSchema} from '@api';
import {extractRelatedObjLink} from '@utils';

const getWorkoutTemplate = (workoutTemplateID) => {
    return client.get(`workouts/templates/${workoutTemplateID}/`, workoutTemplateSchema, GET_WORKOUT_TEMPLATE);
};

const listWorkoutTemplates = (userID, paginationParams = {}) => {
    return client.list(`users/${userID}/workouts/templates/`, workoutTemplateListSchema, GET_WORKOUT_TEMPLATES, {
        ...paginationParams,
        paginationKey: userID.toString(),
    });
};

const createWorkoutTemplate = (userID, {name = 'Untitled', exercises}) => {
    return client.create(
        `users/${userID}/workouts/templates/`,
        {name, exercises: extractRelatedObjLink(exercises)},
        workoutTemplateSchema,
        CREATE_WORKOUT_TEMPLATE,
    );
};

const updateWorkoutTemplate = (workoutTemplate, {name}) => {
    console.log(name);
    return client.patch(extractRelatedObjLink(workoutTemplate), {name}, workoutTemplateSchema, UPDATE_WORKOUT_TEMPLATE);
};

const refreshWorkoutTemplate = (workoutTemplate) => {
    return client.get(extractRelatedObjLink(workoutTemplate), workoutTemplateSchema, REFRESH_WORKOUT_TEMPLATE);
};

const commitWorkoutTemplate = () => async (dispatch) => {
    return dispatch({type: COMMIT_WORKOUT_TEMPLATE});
};

const deleteWorkoutTemplate = (workoutTemplate) => {
    return client.delete(extractRelatedObjLink(workoutTemplate), DELETE_WORKOUT_TEMPLATE);
};

export {
    getWorkoutTemplate,
    listWorkoutTemplates,
    createWorkoutTemplate,
    updateWorkoutTemplate,
    refreshWorkoutTemplate,
    commitWorkoutTemplate,
    deleteWorkoutTemplate,
};
