import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../../../environments/environment';

import * as framework from './framework.reducer';
  
export interface State {
    framework: framework.State
}
  
export const reducers: ActionReducerMap<State> = {
    framework: framework.reducer
};
    
export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
  