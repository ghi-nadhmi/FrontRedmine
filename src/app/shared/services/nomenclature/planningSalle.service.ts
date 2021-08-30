import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTE_NOMENCLATURE_URL } from '@app/shared';
import { VSalle } from '@app/shared/entites/nomenclature/VSalle';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class planningSallesService {

    public affmodifsalle: boolean = false;
    listeSalles: VSalle[];
    selectSalleSubject = new Subject<VSalle>();
    constructor(private http: HttpClient) { }


    public saveCalendar(entity: any) {

        return this.http.post(CONSTANTE_NOMENCLATURE_URL.URL_SAVE_CALENDAR, entity);

    }
    public getListevent() {
        return this.http.get(`${CONSTANTE_NOMENCLATURE_URL.URL_LIST_EVENTS}`);
     
     }

     public deleteById(id: number) {

        return this.http.delete(CONSTANTE_NOMENCLATURE_URL.URL_DELETE_CALENDAR+id);

    }

}
