import { entryActionTypes } from '../actions'

export const DEFAULT_STATE = {
    loading: false,
    loaded: false,
    headerBarHeight: null,
}

export function reducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case entryActionTypes.STARTUP_DATA_LOAD:
            return {
                ...state,
                loading: true,
                loaded: false,
            }
        case entryActionTypes.STARTUP_DATA_LOADED:
            return {
                ...state,
                ...action.payload,
                loading: false,
                loaded: true,
            }

        default:
            return state
    }
}
