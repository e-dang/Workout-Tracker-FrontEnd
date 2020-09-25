import {schema} from 'normalizr';
import {userSchema} from './users';
import {muscleListSchema} from './muscles';
import {equipmentListSchema} from './equipment';

export const movementSchema = new schema.Entity('movements', {
    owner: userSchema,
    muscles: muscleListSchema,
    equipment: equipmentListSchema,
});

export const movementListSchema = [movementSchema];
