import {schema} from 'normalizr';
import {userSchema} from '@api/schemas/users';

export const workoutTemplateSchema = new schema.Entity('workoutTemplates', {
    owner: userSchema,
});

export const workoutTemplateListSchema = [workoutTemplateSchema];
