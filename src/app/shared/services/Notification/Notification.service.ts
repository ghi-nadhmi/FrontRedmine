import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { CONSTANTE_NOMENCLATURE_URL } from '../../constante';
import { CONSTANTE_NOTIFICATION_URL } from '@app/shared/constante/constante_notification_url';

@Injectable({ providedIn: 'root' })
export class NotificationService {

    constructor(private http: HttpClient) {
    }

    public getNumberNotifNotConsulted(idUser: any): Observable<Object> {   
        return this.http.get(`${CONSTANTE_NOTIFICATION_URL.URL_COUNT_NOTIF}` + '/' + idUser + '');

    }


    public getListNotifByIdUser(idUser: any): Observable<Object> {   
        return this.http.get(`${CONSTANTE_NOTIFICATION_URL.URL_DATA_NOTIF}` + '/' + idUser + '');

    }
}
