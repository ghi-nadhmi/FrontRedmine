import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {CONSTANTE_NOMENCLATURE_URL} from "@app/shared";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  constructor(private http: HttpClient) { }

  public getListCurrencies(baseCurrency: string): Observable<Object> {
    // return this.http.get(`${CONSTANTE_NOMENCLATURE_URL.URL_DEVISE}` + baseCurrency);
    return this.http.get(`${CONSTANTE_NOMENCLATURE_URL.URL_DEVISE}`);
    //   return this.http.get('https://v6.exchangerate-api.com/v6/18cc47649e6b0b725d25e226/latest/USD',
    //       {headers:{
    //           "accept": "*",
    //               "Access-Control-Allow-Origin": "*"
    //           }
    //       }
    //   );
  }
}
