import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackersIDService {

   IDtrackers : any ;
   NAMEtrackers :any ;
   constructor(private http:HttpClient) { }
    
}
