import { startupDataLoaded, entryActionTypes } from '../actions';
import { mapTo, delay } from 'rxjs/operators';

export const loadStartupData = action$ =>
  action$.ofType(entryActionTypes.STARTUP_DATA_LOAD).pipe(
    delay(2000),
    mapTo(
      startupDataLoaded({
        headerBarHeight: 48
      })
    )
  );
