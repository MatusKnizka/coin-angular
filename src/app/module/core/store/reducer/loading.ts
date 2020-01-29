import { Action } from '@ngrx/store';
import { FrameworkActionTypes } from '../action/framework.action';

export function loading(state: boolean = false, action: Action) {
    switch(action.type) {
        case FrameworkActionTypes.GET_DATA:
            return true;

        case FrameworkActionTypes.GET_DATA_FAIL:
        case FrameworkActionTypes.GET_DATA_SUCCESS:
            return false

        default:
            return state;
    }
}