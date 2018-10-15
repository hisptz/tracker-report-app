export const entryActionTypes = {
  STARTUP_DATA_LOAD: 'StartupDataLoad',
  STARTUP_DATA_LOADED: 'StartupDataLoaded'
};

export const startupDataLoad = () => ({
  type: entryActionTypes.STARTUP_DATA_LOAD
});

export const startupDataLoaded = payload => ({
  type: entryActionTypes.STARTUP_DATA_LOADED,
  payload
});
