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

export const getAuthState = (getState = undefined) => {
    if (getState) return getState().auth;

    return useSelector((state) => state.auth);
};

export const getAuthToken = (getState = undefined) => {
    return getAuthState(getState).authToken;
};

export const getAuthUserID = (getState = undefined) => {
    return getAuthState(getState).user.id.toString();
};

export const getEquipmentState = (getState = undefined) => {
    if (getState) return getState().equipment;

    return useSelector((state) => state.equipment);
};

export const getEquipment = (paginationKey) => {
    return getDataFromPagination('equipment', 'GET_EQUIPMENT', paginationKey);
};

export const getMuscleState = (getState = undefined) => {
    if (getState) return getState().muscles;

    return useSelector((state) => state.muscles);
};

export const getMuscles = () => {
    return getDataFromPagination('muscles', 'GET_MUSCLES', '1');
};

export const getMovementState = (getState = undefined) => {
    if (getState) return getState().movements;

    return useSelector((state) => state.movements);
};

export const getMovements = (paginationKey) => {
    return getDataFromPagination('movements', 'GET_MOVEMENTS', paginationKey);
};

export const getWorkoutTemplates = (paginationKey) => {
    return getDataFromPagination('workoutTemplates', 'GET_WORKOUT_TEMPLATES', paginationKey);
};

export const getWorkoutTemplateState = (getState = undefined) => {
    if (getState) return getState().workoutTemplates;

    return useSelector((state) => state.workoutTemplates);
};

export const getUncommittedWorkoutTemplate = () => {
    return getWorkoutTemplateState().uncommittedWorkoutTemplate;
};

export const getPaginationState = (action, getState = undefined) => {
    if (getState) return getState().pagination[action];

    return useSelector((state) => state.pagination[action]);
};
