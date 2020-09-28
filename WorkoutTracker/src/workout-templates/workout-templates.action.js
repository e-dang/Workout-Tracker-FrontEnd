import {GET_WORKOUT_TEMPLATES} from '@pagination';
import {client, workoutTemplateListSchema} from '@api';

const listWorkoutTemplates = (userID, paginationParams = {}) => {
    return client.list(`users/${userID}/workouts/templates/`, workoutTemplateListSchema, GET_WORKOUT_TEMPLATES, {
        ...paginationParams,
        paginationKey: userID.toString(),
    });
};

export {listWorkoutTemplates};
