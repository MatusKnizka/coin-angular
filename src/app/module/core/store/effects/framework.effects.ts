import { FrameworkActionTypes, FrameworkActions } from "../action/framework.action";
import { Injectable, Inject } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { map, catchError, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { FrameworkServiceProvider } from '../../service/framework/framework-service.provider';
import { FRAMEWORK_SERVICE_TOKEN } from '../../service/framework/framework-service.token';


@Injectable()
export class FrameworkEffects {

    constructor(
        private actions: Actions<Action>,
        @Inject(FRAMEWORK_SERVICE_TOKEN) private coinService: FrameworkServiceProvider
        ) {}

    @Effect()
    getData = this.actions.pipe(
        ofType(FrameworkActionTypes.GET_DATA),
        switchMap((action: FrameworkActions.GetData) => {
            return this.coinService.fetchData().pipe(
                map(frameworks => new FrameworkActions.GetDataSuccess(frameworks)),
                catchError(() => EMPTY))
        })
    );
}