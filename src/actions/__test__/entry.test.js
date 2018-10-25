import { startupDataLoad, startupDataLoaded, entryActionTypes } from '../entry.actions';

describe('actions', () => {
  it('should create action to load data on startup', () => {
    const expectedAction = {
      type: entryActionTypes.STARTUP_DATA_LOAD
    };
    expect(startupDataLoad()).toEqual(expectedAction);
  });

  it('should create action to update loaded data', () => {
    const payload = {
      headerBarHeight: 45
    };
    const expectedAction = {
      type: entryActionTypes.STARTUP_DATA_LOADED,
      payload
    };
    expect(startupDataLoaded(payload)).toEqual(expectedAction);
  });
});
