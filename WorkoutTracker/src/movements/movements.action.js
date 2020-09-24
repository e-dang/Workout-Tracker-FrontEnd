import {CREATE_MOVEMENT} from './movements.type';
import {GET_MOVEMENTS} from '../pagination/pagination.action';
import {extractRelatedObjLink} from '../utils/action-helpers';
import client from '../api/client';
import {movementListSchema, movementSchema} from '../api/schemas';

// export const createMovement = (name, equipment, muscles) => async (dispatch, getState) => {
//     const authState = getState().auth;

//     dispatch({type: CREATE_MOVEMENT.PENDING});
//     return api
//         .createMovement(authState.user.id, authState.authToken, {
//             name,
//             equipment: extractRelatedObjLink(equipment),
//             muscles: extractRelatedObjLink(muscles),
//         })
//         .then((resp) => {
//             dispatch({type: CREATE_MOVEMENT.SUCCESS, payload: resp.data});
//         })
//         .catch((err) => {
//             dispatch({type: CREATE_MOVEMENT.FAILURE, payload: err.response.status});
//             throw err;
//         });
// };

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
