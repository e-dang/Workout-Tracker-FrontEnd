import {CREATE_MOVEMENT} from '@movements/movements.type';
import {GET_MOVEMENTS} from '@pagination';
import {extractRelatedObjLink} from '@utils';
import {client, movementListSchema, movementSchema} from '@api';

const listMovements = (userID, paginationParams = {}) => {
    return client.list(`users/${userID}/movements/`, movementListSchema, GET_MOVEMENTS, {
        ...paginationParams,
        paginationKey: userID.toString(),
    });
};

const createMovement = (userID, {name, equipment, muscles}) => {
    return client.create(
        `users/${userID}/movements/`,
        {name, equipment: extractRelatedObjLink(equipment), muscles: extractRelatedObjLink(muscles)},
        movementSchema,
        CREATE_MOVEMENT,
    );
};

export {listMovements, createMovement};
