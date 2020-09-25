import {schema} from 'normalizr';
import {userSchema} from './users';

export const equipmentSchema = new schema.Entity('equipment', {
    owner: userSchema,
});

export const equipmentListSchema = [equipmentSchema];
