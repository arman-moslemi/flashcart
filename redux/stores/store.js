import {applyMiddleware, compose, createStore} from 'redux';
import reducer from '../reducers/reducer';
// import {createLogger} from 'redux-logger';
// import { AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {persistStore, persistReducer} from 'redux-persist';
// const store = createStore(reducer);
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  //TODO
  whitelist: ['azmoon'],
};
const persistedReducer = persistReducer(persistConfig, reducer);
export const store = createStore(persistedReducer);
export const persist = persistStore(store);