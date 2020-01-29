import { HttpClient } from '@angular/common/http';
import { Framework } from '../../model/framework/framework.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';


@Injectable()
export class FrameworkService {

    url: string;

    constructor(private http: HttpClient) {
        this.url = environment.frameworkUrl;
    }

    fetchData(): Observable<Array<Framework>> {
        return this.http.get<Array<Framework>>(`${this.url}/frameworks`);
    }
}