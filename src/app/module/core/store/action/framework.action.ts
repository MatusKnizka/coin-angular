import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Framework } from '../../model/framework/framework.interface';

export namespace FrameworkActionTypes {
    export const GET_DATA = 'coin:get';
    export const GET_DATA_FAIL = 'coin:get-fail';
    export const GET_DATA_SUCCESS = 'coin:get-success';
}

export type FrameworkActionsAll = FrameworkActions.GetData | FrameworkActions.GetDataFail | FrameworkActions.GetDataSuccess;

export namespace FrameworkActions {

    export class GetData implements Action {
        readonly type = FrameworkActionTypes.GET_DATA;

        constructor(public dataUid: string) { }
    }

    export class GetDataFail implements Action {
        readonly type = FrameworkActionTypes.GET_DATA_FAIL;

        constructor(public error: HttpErrorResponse) { }
    }

    export class GetDataSuccess implements Action {
        readonly type = FrameworkActionTypes.GET_DATA_SUCCESS;

        constructor(public data: Array<Framework>) { }
    }
}
