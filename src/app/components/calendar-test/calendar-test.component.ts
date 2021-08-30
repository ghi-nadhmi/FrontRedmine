import { CalendarEvent, CalendarView, DAYS_OF_WEEK } from 'angular-calendar';
import { DialogTestCalendarComponent } from './../dialog-test-calendar/dialog-test-calendar.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonService, CONSTANTE_WS, VAffectationPersonnel } from '@app/shared';
import { EntitesService } from '@app/shared/services/nomenclature/entites.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { planningSallesService } from '@app/shared/services/nomenclature/planningSalle.service';
import { addHours, startOfDay } from 'date-fns';
import { colors } from '../calendar/colors';
import { Subject } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar-test',
  templateUrl: './calendar-test.component.html',
  styleUrls: ['./calendar-test.component.scss']
})
export class CalendarTestComponent implements OnInit {

  listPlanning = [];
  currentLang: string;
  locale: string = '';
  view: CalendarView = CalendarView.Week;
  viewDate: Date = new Date();
  listEntity: any;
  affectationPersonnel: VAffectationPersonnel;
  clickedDate: Date;
  selectedEntity:any;
  events: CalendarEvent[] = [];
  weekStartsOn: number = DAYS_OF_WEEK.SATURDAY;
  excludeDays: number[] = [0, 6];
  refresh: Subject<any> = new Subject();
  ev = [];
  @Output() viewChange = new EventEmitter<CalendarView>();
  @Output() viewDateChange = new EventEmitter<Date>();
  @Input () listevent : any ;
  CalendarView = CalendarView;
  date:string="" ;
  constructor( 
    private entitesService: EntitesService,
    private toastr: ToastrService,
    private translate: TranslateService,
    private commonService: CommonService,
    private dialog: MatDialog,
    private plannigService: planningSallesService,
    ) { 

      this.translate.onDefaultLangChange.subscribe((language) => {
        this.currentLang = language.lang;
        
      });
   
  }

  ngOnInit() {
    this.listEntity = [];
    this.affectationPersonnel = this.commonService.getAffectPersonnelCurrentUser();
    this.listEntity = this.entitesService.getListEntiteForCombo(this.affectationPersonnel.idNmJurid).subscribe(
      response => {
        if (response['code'] === CONSTANTE_WS.SUCCESS) {
          this.listEntity = response['payload'];
        }
      },
      error => {
        this.toastr.error(this.translate.instant('message.error.intern'), '');
      }
    )
  }
  dat:Date;
  showDialog(){
let heur=0;

    this.ev =[];
    this.events = []
    this.plannigService.getListevent().subscribe((res) => {
      this.ev = res['payload'];
     
      this.ev= this.ev.filter(x => x.id_entite == this.selectedEntity);
 
      this.ev.forEach(t => {
        this.dat= new Date(t.start);
        t.start = moment().day( this.dat.getDay()).toDate();
        heur=heur+0.5;
        let title: string;
        if (this.currentLang === 'ar')
          title = t.titleAr;
        else
          title = t.titleFr;
   
        this.events = [
          ...this.events,

          {
            id: t.id,
            title: title,
            start: addHours(startOfDay(t.start), 7.5+heur),
            color: colors.yellow,
            draggable: false,
           
          },
        ];


      })
      const dialogRef = this.dialog.open(DialogTestCalendarComponent, {
        minWidth: "50vw", disableClose: false, data: {events : this.events,locale:this.locale}
      } );
      dialogRef.afterClosed().subscribe(result => {
        let month =" "+(this.entitesService.clickedDate.getMonth()+1) ;
        month=(this.entitesService.clickedDate.getMonth()+1)>=10?month:("0"+month.trim());
        month=month.trim();

       this.date= this.entitesService.clickedDate.getFullYear()+"-"+month+"-"+(this.entitesService.clickedDate.getDate()+""+this.entitesService.title)
      })
    })

 
  }   



}
