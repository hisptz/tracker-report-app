import { combineReducers } from 'redux';
import { entryReducer as init } from './entry.reducers';

export const rootReducer = combineReducers({ init });
