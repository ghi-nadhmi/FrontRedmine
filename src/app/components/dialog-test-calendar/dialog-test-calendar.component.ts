import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {  CalendarEvent, CalendarView, DAYS_OF_WEEK } from 'angular-calendar';
import { VAffectationPersonnel, CommonService } from '@app/shared';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EntitesService } from '@app/shared/services/nomenclature/entites.service';
import { ToastrService } from 'ngx-toastr';
import { addHours, startOfDay } from 'date-fns';
import { colors } from '../calendar/colors';
import * as moment from 'moment';


@Component({
  selector: 'app-dialog-test-calendar',
  templateUrl: './dialog-test-calendar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./dialog-test-calendar.component.scss']
})
export class DialogTestCalendarComponent implements OnInit {
listPlanning = [];
  currentLang: string;
  locale: string = '';
  view: CalendarView = CalendarView.Week;
  viewDate: Date = new Date();
  listEntity: any;
  affectationPersonnel: VAffectationPersonnel;
  clickedDate: Date;
  eventDate: Date;
  events: CalendarEvent[] = [];
  weekStartsOn: number = DAYS_OF_WEEK.SATURDAY;
  excludeDays: number[] = [0, 6];
  ev = [];
  @Output() viewChange = new EventEmitter<CalendarView>();
  @Output() viewDateChange = new EventEmitter<Date>();
  @Input () listevent : any ;
  CalendarView = CalendarView;
  constructor(
    private translate: TranslateService,
    private commonService: CommonService,
    public dialog: MatDialogRef<DialogTestCalendarComponent>,
    @Inject(MAT_DIALOG_DATA) public  data,  
     private entitesService: EntitesService,
     private toastr: ToastrService
  ) {
    this.currentLang = this.translate.getDefaultLang();
    this.translate.onDefaultLangChange.subscribe((language) => {
      this.currentLang = language.lang;
      this.locale = this.currentLang;
    });

    }


  ngOnInit(): void {

    this.currentLang = this.translate.getDefaultLang();
    this.locale = this.currentLang;
    this.affectationPersonnel = this.commonService.getAffectPersonnelCurrentUser()
    this.events = [] ;
    this.events = this.data.events ;
    this.ev=this.events;
  }


  eventClicked({ event }: { event: CalendarEvent }): void {
    this.entitesService.clickedDate =  event.start;
    this.entitesService.title =  event.title;
  }
   heur=0;
 i=0;
 date:Date;
  getEvents(){


this.i++;
    this.heur=0;
    this.ev.forEach(t => {

       this.heur=this.heur+0.5;
       this.date= t.start;
       t.star = moment().day(this.date.getDay()).add(this.i, 'week');
      this.events = [
        ...this.events,

        {
          id: t.id,
          title: t.title,
          start: addHours(startOfDay( t.star), 7.5+ this.heur),
          color: colors.yellow,
          draggable: false,
         
        },
      ];


    })
  }


  save() {
    this.toastr.success('', this.translate.instant('dossiers.successMsg'));
    this.dialog.close()
  }

  close(){
    this.entitesService.clickedDate = null;
    this.entitesService.title =  null;
  this.dialog.close()

}
}
