import AsyncStorage from '@react-native-community/async-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import {authReducer} from '@auth';
import {movementReducer} from '@movements';
import {equipmentReducer} from '@equipment';
import {musclesReducer} from '@muscles';
import {paginationReducer} from '@pagination';
import {entityReducer} from '@entities';

const rootPersistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth'],
};

const _rootReducer = combineReducers({
    auth: authReducer,
    movements: movementReducer,
    equipment: equipmentReducer,
    muscles: musclesReducer,
    pagination: paginationReducer,
    entities: entityReducer,
});

// export const rootReducer = persistReducer(rootPersistConfig, _rootReducer);
export default persistReducer(rootPersistConfig, _rootReducer);
