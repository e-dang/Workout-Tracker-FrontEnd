import {createStore, applyMiddleware} from 'redux';
import rootReducers from './root.reducer';
import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist';

const middleWare = [thunk];

export const store = createStore(rootReducers, applyMiddleware(...middleWare));

export const persistor = persistStore(store);
