import {schema} from 'normalizr';
import {userSchema} from '@api/schemas/users';
import {muscleListSchema} from '@api/schemas/muscles';
import {equipmentListSchema} from '@api/schemas/equipment';

export const movementSchema = new schema.Entity('movements', {
    owner: userSchema,
    muscles: muscleListSchema,
    equipment: equipmentListSchema,
});

export const movementListSchema = [movementSchema];
