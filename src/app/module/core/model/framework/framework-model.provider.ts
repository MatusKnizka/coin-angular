import { Framework } from './framework.interface';
import { Observable } from 'rxjs';

export interface FrameworkModelProvider {
    frameworks: Observable<Array<Framework>>;

    getData(coinUid: string): void;
}