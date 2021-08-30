import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { CONSTANTE_NOMENCLATURE_URL } from '@app/shared';

@Injectable({ providedIn: 'root' })
export class StatusJuridService {

    constructor(private http: HttpClient) {
    }

    public getListStatusJurid(): Observable<Object> {
        return this.http.get(`${CONSTANTE_NOMENCLATURE_URL.URL_STAT_JURID}`);
    }
}
