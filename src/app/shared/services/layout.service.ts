import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})


export class LayoutService {
    debugger ; 
    public breadcumpboolean : boolean = false ; 
    public  listBreadcumsActuel : Array<object> = [] ;

    private emitChangeSource = new Subject<any>();
    public   breadcrumblist  : any[] = [];
    changeEmitted$ = this.emitChangeSource.asObservable();

   
    // Customizer
    getListBreadCumps() :Observable< Array<object>>[]

    {
   return this.breadcrumblist ;

    }

    getListBreadCumpsActuel()
    {
        return this.listBreadcumsActuel ;
    }

    private emitBreadcumbsListSource = new Subject<any>();
    breadcumbsListEmitted$ = this.emitBreadcumbsListSource.asObservable();
    
    private emitCustomizerSource = new Subject<any>();
    customizerChangeEmitted$ = this.emitCustomizerSource.asObservable();

    private emitToggleCustomizerSource = new Subject<any>();
    toggleCustomizerChangeEmitted$ = this.emitToggleCustomizerSource.asObservable();

    // customizer - compact menu

    private emitCustomizerCMSource = new Subject<any>();
    customizerCMChangeEmitted$ = this.emitCustomizerCMSource.asObservable();

    // customizer - compact menu

    private emitNotiSidebarSource = new Subject<any>();
    notiSidebarChangeEmitted$ = this.emitNotiSidebarSource.asObservable();

    constructor() { }

    emitChange(change: any) {
        this.emitChangeSource.next(change);
    }

    emitCustomizerChange(change: any) {
        this.emitCustomizerSource.next(change);
    }

    emitToggleCustomizerChange(change: any) {
        this.emitToggleCustomizerSource.next(change);
    }

    emitCustomizerCMChange(change: any) {
        this.emitCustomizerCMSource.next(change);
    }

    emitNotiSidebarChange(change: any) {
        this.emitNotiSidebarSource.next(change);
    }

    emitBreadcumbListChange(change: any) {
        debugger ; 
        console.log("service breadcumb")
        this.emitBreadcumbsListSource.next(change);
    }

    


}
