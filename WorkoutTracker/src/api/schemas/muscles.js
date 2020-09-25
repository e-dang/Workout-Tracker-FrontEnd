import {schema} from 'normalizr';

export const muscleSchema = new schema.Entity(
    'muscles',
    {},
    {
        idAttribute: (muscle) => muscle.name,
    },
);

export const muscleListSchema = [muscleSchema];
muscleSchema.define({sub: muscleListSchema});
