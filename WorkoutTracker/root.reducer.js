import AsyncStorage from '@react-native-community/async-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import {authReducer} from './src/auth';
import {movementReducer} from './src/movements';
import {equipmentReducer} from './src/equipment';
import {musclesReducer} from './src/muscles';
import {paginationReducer} from './src/pagination';
import {entityReducer} from './src/entities/entities.reducer';

const rootPersistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth'],
};

const rootReducer = combineReducers({
    auth: authReducer,
    movements: movementReducer,
    equipment: equipmentReducer,
    muscles: musclesReducer,
    pagination: paginationReducer,
    entities: entityReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
