import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTE_NOMENCLATURE_URL } from '@app/shared/constante';
import { CONSTANTE_PERSONNE } from '@app/shared/constante/constante_pp_pm';
import { TAdmPersonnel } from '@app/shared/entites';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdmPersonnelService {
  public idPersonnel: number;
  public edit: boolean;

  private perso = new Subject<TAdmPersonnel>();
  constructor(private http: HttpClient) { }

  
 
}
