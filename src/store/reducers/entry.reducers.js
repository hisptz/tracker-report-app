import { entryActionTypes } from '../actions';

const initialState = {
  loading: false,
  loaded: false,
  headerBarHeight: null
};

export function entryReducer(state = initialState, action) {
  switch (action.type) {
    case entryActionTypes.STARTUP_DATA_LOAD:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case entryActionTypes.STARTUP_DATA_LOADED:
      return {
        ...state,
        ...action.payload,
        loading: false,
        loaded: true
      };

    default:
      return state;
  }
}
