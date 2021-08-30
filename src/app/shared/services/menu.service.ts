import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  /* getMenu(): Array<any> {
    const menu = [
      { name: 'home', path: './home', children: [] },
      { 
        name: 'الوارد', 
        path: '/dashboard/dashboard', 
        children: [
          {
            name: 'تسجيل الوارد',
            path: '/bo/courrier/arrivee/ajout',
          },

          {
            name: 'قائمة الوارد',
            path: '/bo/courrier/arrivee/liste',
          },

          {
            name: 'الوارد في انتظار توزيع',
            path: '/bo/courrier/arrivee/distribution/liste',
          }



            ]
          }
        ] 
      
    

    return menu;
  } */
}
