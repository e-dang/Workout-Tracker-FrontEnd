import {schema} from 'normalizr';
import {userSchema} from '@api/schemas/users';

export const exerciseTemplateSchema = new schema.Entity('exerciseTemplate', {
    owner: userSchema,
});

export const exerciseTemplateListSchema = [exerciseTemplateSchema];
