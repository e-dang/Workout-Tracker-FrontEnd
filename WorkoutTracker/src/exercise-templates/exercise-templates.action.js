import {CREATE_EXERCISE_TEMPLATE} from '@exercise-templates/exercise-templates.type';
import {client, exerciseTemplateSchema} from '@api';
import {extractRelatedObjLink} from '@utils';

export const createExerciseTemplate = (userID, {workoutTemplate, movement, units, sets}) => {
    const data = {
        name: movement.name,
        snames: movement.snames,
        order: workoutTemplate.exercises.length,
        workout_templates: extractRelatedObjLink(workoutTemplate),
        workloads: [
            {
                order: 0,
                movement: movement.id,
                units,
                sets,
            },
        ],
    };

    return client.create(`users/${userID}/exercises/`, data, exerciseTemplateSchema, CREATE_EXERCISE_TEMPLATE);
};
