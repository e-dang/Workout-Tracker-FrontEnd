import {merge} from 'lodash';

const initialState = {
    muscles: {},
};

export const entityReducer = (state = initialState, action) => {
    if (action && action.payload && action.payload.entities) {
        return merge({}, state, action.payload.entities);
    }

    return state;
};
