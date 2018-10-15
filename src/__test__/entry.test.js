import { entryActionTypes } from '../store/actions';
import { startupDataLoad, startupDataLoaded } from '../store/actions';

describe('actions', () => {
  it('should create action to load data on startup', () => {
    const exprectedAction = {
      type: entryActionTypes.STARTUP_DATA_LOAD
    };
    expect(startupDataLoad()).toEqual(exprectedAction);
  });

  it('should create action to update loaded data', () => {
    const payload = {
      headerBarHeight: 45
    };
    const exprectedAction = {
      type: entryActionTypes.STARTUP_DATA_LOADED,
      payload
    };
    expect(startupDataLoaded(payload)).toEqual(exprectedAction);
  });
});
