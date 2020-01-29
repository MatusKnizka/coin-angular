import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../store/reducer/core.reducer';
import { State as FrameworkState } from '../../store/reducer/framework.reducer';
import { map } from 'rxjs/operators';
import { FrameworkActions } from '../../store/action/framework.action';
import { Injectable } from '@angular/core';
import { Framework } from './framework.interface';
import { FrameworkModelProvider } from './framework-model.provider';

@Injectable()
export class FrameworkModel implements FrameworkModelProvider {
    frameworks: Observable<Array<Framework>>;

    constructor(private store: Store<State>) {
        this.initSubject('frameworks');
    }

    private initSubject<T>(property: string): void {
        this[property] = <Observable<T>>this.store.select('framework').pipe(map((state: FrameworkState) => state[property]));
    }

    getData(coinUid: string) {
        this.store.dispatch(new FrameworkActions.GetData(coinUid));
    }
}