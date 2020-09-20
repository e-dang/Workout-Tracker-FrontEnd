import AsyncStorage from '@react-native-community/async-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import {authReducer} from './src/auth';

const rootPersistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth'],
};

const rootReducer = combineReducers({
    auth: authReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
