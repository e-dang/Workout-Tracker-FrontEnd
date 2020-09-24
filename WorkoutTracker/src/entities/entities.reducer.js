import {merge} from 'lodash';

const initialState = {
    muscles: {},
    equipment: {},
    movements: {},
};

export const entityReducer = (state = initialState, action) => {
    if (action && action.payload && action.payload.entities) {
        return merge({}, state, action.payload.entities);
    }

    return state;
};
