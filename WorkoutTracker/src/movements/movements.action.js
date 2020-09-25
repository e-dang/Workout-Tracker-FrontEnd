import {CREATE_MOVEMENT} from './movements.type';
import {GET_MOVEMENTS} from '../pagination/pagination.action';
import {extractRelatedObjLink} from '../utils/action-helpers';
import client from '../api/client';
import {movementListSchema, movementSchema} from '../api/schemas';

export const movementActions = {
    listMovements: (userID, paginationParams = {}) => {
        return client.list(`users/${userID}/movements/`, movementListSchema, GET_MOVEMENTS, {
            ...paginationParams,
            paginationKey: userID.toString(),
        });
    },
    createMovement: (userID, {name, equipment, muscles}) => {
        return client.create(
            `users/${userID}/movements/`,
            {name, equipment: extractRelatedObjLink(equipment), muscles: extractRelatedObjLink(muscles)},
            movementSchema,
            CREATE_MOVEMENT,
        );
    },
};
