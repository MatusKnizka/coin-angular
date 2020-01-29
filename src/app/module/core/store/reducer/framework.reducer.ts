import { FrameworkActionTypes, FrameworkActionsAll } from '../action/framework.action';
import { loading } from './loading';
import { Framework } from '../../model/framework/framework.interface';

export interface State {
    loading?: boolean;
    frameworks: Array<Framework>;
}

const initialState = {
    loading: false,
    frameworks: []
}

export function reducer(state: State = initialState, action: FrameworkActionsAll): State {
    switch(action.type) {
        case FrameworkActionTypes.GET_DATA_SUCCESS:
            return {
                ...state,
                loading: loading(state.loading, action),
                frameworks: action.data
            }

            default:
                return state;
    }
}