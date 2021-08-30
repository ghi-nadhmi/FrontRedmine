import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DecoupageService {

  private emitOpenAddEditItemModalSource = new Subject<any>();
  changeOpenModalEmitted$ = this.emitOpenAddEditItemModalSource.asObservable();

  private emitAddEditItemIdSource = new Subject<any>();
  changeAddEditItemIdEmitted$ = this.emitAddEditItemIdSource.asObservable();

  emitOpenAddEditItemModalChange(obj: any) {
    console.log('Service open modal');
    this.emitOpenAddEditItemModalSource.next(obj);
  }

  emitAddEditItemIdChange(idParent: number | string, action:string) {
    console.log('Service emit id');
    this.emitAddEditItemIdSource.next({id: idParent, action: action});
  }

}
