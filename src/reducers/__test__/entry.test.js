import { reducer, DEFAULT_STATE } from '../entry.reducers';
import { entryActionTypes } from '../../actions';

describe('Reducer: Entry', () => {
  it('should return the default state', () => {
    const actualState = reducer(DEFAULT_STATE, { type: 'NO_MATCH' });

    expect(actualState).toEqual(DEFAULT_STATE);
  });

  it('should change state to loading', () => {
    const loading = true;
    const loadingState = {
      ...DEFAULT_STATE,
      loading
    };
    const actualState = reducer(DEFAULT_STATE, { type: entryActionTypes.STARTUP_DATA_LOAD });
    expect(loadingState).toEqual(actualState);
  });

  it('should change state to loaded and add headerHeight', () => {
    const loading = false;
    const loaded = true;
    const headerBarHeight = 48;

    const loadedState = {
      ...DEFAULT_STATE,
      loaded,
      loading,
      headerBarHeight
    };

    const actualState = reducer(DEFAULT_STATE, {
      type: entryActionTypes.STARTUP_DATA_LOADED,
      payload: { headerBarHeight }
    });

    expect(loadedState).toEqual(actualState);
  });
});
