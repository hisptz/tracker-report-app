import { combineEpics } from 'redux-observable';
import { loadStartupData } from './entry.epics';

export const rootEpic = combineEpics(loadStartupData);
