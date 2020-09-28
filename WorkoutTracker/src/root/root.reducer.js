import AsyncStorage from '@react-native-community/async-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import {authReducer} from '@auth';
import {movementReducer} from '@movements';
import {equipmentReducer} from '@equipment';
import {musclesReducer} from '@muscles';
import {paginationReducer} from '@pagination';
import {entityReducer} from '@entities';
import {workoutTemplateReducer} from '@workout-templates';

const rootPersistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth'],
};

const _rootReducer = combineReducers({
    auth: authReducer,
    entities: entityReducer,
    pagination: paginationReducer,
    muscles: musclesReducer,
    equipment: equipmentReducer,
    movements: movementReducer,
    workoutTemplates: workoutTemplateReducer,
});

export default persistReducer(rootPersistConfig, _rootReducer);
