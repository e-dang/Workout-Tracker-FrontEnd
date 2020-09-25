import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist';
import rootReducers from '@root/root.reducer';

const middleWare = [thunk];

export const store = createStore(rootReducers, applyMiddleware(...middleWare));

export const persistor = persistStore(store);
