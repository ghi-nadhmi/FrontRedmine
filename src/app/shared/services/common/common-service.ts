import { Injectable } from '@angular/core';
import { VAffectationPersonnel } from '@app/shared/entites';
import * as _moment from 'moment';

@Injectable({
    providedIn: 'root'
})

export class CommonService {

    public convertDateToTimeStamp(date: any): any {
        return (_moment(date).format('YYYY-MM-DDT') + _moment(date).format('hh:mm:ss.sss') + 'Z').toString()
    }

    public getAffectPersonnelCurrentUser(): VAffectationPersonnel {
        let affectationPersonnel = new VAffectationPersonnel()
        affectationPersonnel = JSON.parse(sessionStorage.getItem('affectationPersonnel'));
        return affectationPersonnel;
    }

}
