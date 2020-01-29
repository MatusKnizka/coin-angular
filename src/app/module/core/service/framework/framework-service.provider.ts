import { Observable } from 'rxjs';
import { Framework } from '../../model/framework/framework.interface';
import { HttpErrorResponse } from '@angular/common/http';


export interface FrameworkServiceProvider {

    url: string;

    fetchData(): Observable<Array<Framework>>;
}