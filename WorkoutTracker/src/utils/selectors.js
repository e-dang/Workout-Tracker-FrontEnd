import {useSelector} from 'react-redux';

const getDataFromPagination = (entity, action, paginationKey) => {
    const paginationState = useSelector((state) => state.pagination);
    const entityState = useSelector((state) => state.entities);
    let ids = [];

    try {
        ids = paginationState[action][paginationKey.toString()].ids;
    } catch (TypeError) {}

    return ids.map((id) => entityState[entity][id]);
};

export const getAuthState = () => {
    return useSelector((state) => state.auth);
};

export const getAuthToken = () => {
    return getAuthState().authToken;
};

export const getAuthUserID = () => {
    return getAuthState().user.id.toString();
};

export const getEquipmentState = () => {
    return useSelector((state) => state.equipment);
};

export const getEquipment = (paginationKey) => {
    return getDataFromPagination('equipment', 'GET_EQUIPMENT', paginationKey);
};

export const getMuscleState = () => {
    return useSelector((state) => state.muscles);
};

export const getMuscles = () => {
    return getDataFromPagination('muscles', 'GET_MUSCLES', '1');
};

export const getMovementState = () => {
    return useSelector((state) => state.movements);
};

export const getMovements = (paginationKey) => {
    return getDataFromPagination('movements', 'GET_MOVEMENTS', paginationKey);
};

export const getPaginationState = (action) => {
    return useSelector((state) => state.pagination[action]);
};
