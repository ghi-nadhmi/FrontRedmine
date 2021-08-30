import { data } from './../../shared/data/smart-data-table';
import { Component, ViewEncapsulation, OnInit, Input, Inject, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import {
  CalendarEvent,
  CalendarView,
  CalendarDateFormatter,
  DAYS_OF_WEEK,
  CalendarEventTimesChangedEvent,
  CalendarWeekViewBeforeRenderEvent,
  CalendarWeekViewComponent
} from 'angular-calendar';
import {
  startOfDay,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import { DialogCalenderComponent } from '../dialog-calender/dialog-calender.component';
import { colors } from './colors';
import { CustomDateFormatter } from './CustomDateFormatter';
import { SallesService } from '@app/shared/services/nomenclature/salles.service';
import { ToastrService } from 'ngx-toastr';
import { CONSTANTE_WS, VAffectationPersonnel, CommonService } from '@app/shared';
import { EntitesService } from '@app/shared/services/nomenclature/entites.service';
import { planningSallesService } from '@app/shared/services/nomenclature/planningSalle.service';
import { planningSalle } from '@app/shared/entites/nomenclature/planningSalle';
import * as moment from 'moment';


export interface data {
  capacite: number;
  selectedSalle: any;
  selectedEntity: any;

}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter
    }
  ]
})
export class CalendarComponent implements OnInit, AfterViewInit {
  capacite: number;
  selectedSalle: any;
  selectedEntity: any;
  currentLang: string;
  locale: string = '';
  listSalle: any;
  listEntity: any;
  dtc: Date = new Date();
  affectationPersonnel: VAffectationPersonnel;
  ev = [];
  daySeance: Date = new Date();
  view: CalendarView = CalendarView.Week;
  viewDate: Date = new Date();
  @ViewChild("ipt", { static: true }) ipt: ElementRef;
  @ViewChild("cal", { static: true }) cal: CalendarWeekViewComponent;
  clickedDate: Date;
  lista: CalendarEvent[] = [];
  @Input()
  events: CalendarEvent[] = [];
  weekStartsOn: number = DAYS_OF_WEEK.SATURDAY;
  excludeDays: number[] = [0, 6];
  refresh: Subject<any> = new Subject();
 i:number=0;
  constructor(

    private translate: TranslateService,
    private dialog: MatDialog,
    private sallesService: SallesService,
    private entitesService: EntitesService,
    private toastr: ToastrService,
    private commonService: CommonService,
    private plannigService: planningSallesService
  ) {
    this.currentLang = this.translate.getDefaultLang();
    this.translate.onDefaultLangChange.subscribe((language) => {
  
      this.currentLang = language.lang;
      this.locale = this.currentLang;
      
      this.i++;
      if(this.i>1){
      this.events = []
      this.getevent();
    }
      this.refresh.next()
      setTimeout(() => { this.getTitle(); }, 2)
    });
  }

  ngOnInit(): void {
    

    this.currentLang = this.translate.getDefaultLang();
    this.locale = this.currentLang;
    this.affectationPersonnel = this.commonService.getAffectPersonnelCurrentUser();
    this.listSalle = [];
    this.listEntity = [];
    
    this.events = [];
    this.getevent();
    this.listSalle = this.sallesService.getListSalleForCombo(this.affectationPersonnel.idNmJurid).subscribe(
      response => {
        if (response['code'] === CONSTANTE_WS.SUCCESS) {
          this.listSalle = response['payload'];
        }
      },
      error => {
        this.toastr.error(this.translate.instant('message.error.intern'), '');
      }
    )


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

  ngAfterViewInit(): void {
    this.getTitle();
  }



  getevent() {

    
    this.plannigService.getListevent().subscribe((res) => {
      this.ev = res['payload']

      this.ev.forEach(t => {

        let title: string;
        if (this.currentLang === 'ar')
          title = t.titleAr;
        else
          title = t.titleFr;
        if (t.id_seance == "1" || t.id_seance == "2")
          t.start = moment().day(1).toDate();
        else if (t.id_seance == "3" || t.id_seance == "4")
          t.start = moment().day(2).toDate();
        else if (t.id_seance == "5" || t.id_seance == "6")
          t.start = moment().day(3).toDate();
        else if (t.id_seance == "7" || t.id_seance == "8")
          t.start = moment().day(4).toDate();
        else if (t.id_seance == "9" || t.id_seance == "10")
          t.start = moment().day(5).toDate();
        this.events = [
          ...this.events,


          {
            id: t.id,
            title: title,
            start: addHours(startOfDay(t.start), t.hour),
            color: colors.yellow,
            draggable: true,
            actions: [
              {
                label: '<i class="fa fa-pencil" aria-hidden="true"></i>',
                onClick: ({ event }: { event: CalendarEvent }): void => {
                  const ta = this.dialog.open(DialogCalenderComponent, {
                    minWidth: "35vw", disableClose: false, data: { capacite: t.capacite, selectedEntity: Number(t.id_entite), selectedSalle: Number(t.id_nm_salle), id: t.id }
                  }

                  );
                  ta.afterClosed().subscribe(result => {

                    let plan: planningSalle = new planningSalle();
                    plan.idNmEntite = result.selectedEntity;
                    plan.capacite = result.capacite;
                    plan.idNmSalle = result.selectedSalle;
                    plan.id = Number(event.id);
                    this.plannigService.saveCalendar(plan).subscribe(
                      response => {
                        if (response['code'] === CONSTANTE_WS.SUCCESS) {
                          this.toastr.success('', this.translate.instant('dossiers.successMsg'));
                          this.events = []
                          this.getevent();
                          this.refresh.next();
                        }

                        else this.toastr.error(this.translate.instant('message.error.intern'), '');
                      },
                    )
                  })

                },
              },
              {
                label: '<i class="fa fa-trash" aria-hidden="true"></i>',
                onClick: ({ event }: { event: CalendarEvent }): void => {
                  this.events = this.events.filter((iEvent) => iEvent !== event);
                  this.plannigService.deleteById(Number(event.id)).subscribe(
                    response => {
                      if (response['code'] === CONSTANTE_WS.SUCCESS) {
                        this.events = []
                        this.getevent();
                        this.refresh.next();
                        this.toastr.success('', this.translate.instant('dossiers.successMsg'));
                      }

                      else this.toastr.error(this.translate.instant('message.error.intern'), '');
                    }
                  )
                },
              },
            ],
          },
        ];


      })

    })
  }

  getTitle() {

    const y = document.getElementsByClassName("cal-hour").item(0);
    const z = document.getElementsByClassName("cal-hour cal-hour-odd").item(0);
    if (this.locale === 'ar') {
      y.innerHTML = " الفترة الصباحية";
      z.innerHTML = "الفترة المسائية";
    } else {

      y.innerHTML = " Le Matin";
      z.innerHTML = "Le Soir";

    }
    y.classList.add("mystyle007");
    z.classList.add("mystyle008");

    var x, i;
    x = document.querySelectorAll(".cal-time-label-column >.cal-hour");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }

  }

 
  eventTimesChanged({
    event,
    newStart,
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;

    let min: number;
    if (newStart.getMinutes() == 30)
      min = 0.5;
    else
      min = 0;

    let plan: planningSalle = new planningSalle();
    plan.id = Number(event.id);

    if (newStart.getDay() == 1 && newStart.getHours() < 13)
      plan.idNmSeance = 1;

    else if (newStart.getDay() == 1 && newStart.getHours() >= 13)
      plan.idNmSeance = 2;

    if (newStart.getDay() == 2 && newStart.getHours() < 13)
      plan.idNmSeance = 3;

    else if (newStart.getDay() == 2 && newStart.getHours() >= 13)
      plan.idNmSeance = 4;

    if (newStart.getDay() == 3 && newStart.getHours() < 13)
      plan.idNmSeance = 5;

    else if (newStart.getDay() == 3 && newStart.getHours() >= 13)
      plan.idNmSeance = 6;

    if (newStart.getDay() == 4 && newStart.getHours() < 13)
      plan.idNmSeance = 7;

    else if (newStart.getDay() == 4 && newStart.getHours() >= 13)
      plan.idNmSeance = 8;

    if (newStart.getDay() == 5 && newStart.getHours() < 13)
      plan.idNmSeance = 9;

    else if (newStart.getDay() == 5 && newStart.getHours() >= 13)
      plan.idNmSeance = 10;

    plan.title = "drag";
    this.plannigService.saveCalendar(plan).subscribe(
      response => {

        this.events = []
        this.getevent();
      },
    )

    this.refresh.next();
  }

  beforeWeekViewRender(renderEvent: CalendarWeekViewBeforeRenderEvent) {
    renderEvent.hourColumns.forEach((hourColumn) => {
      hourColumn.hours.forEach((hour) => {
        hour.segments.forEach((segment) => {
          if (
            segment.date.getHours() >= 8 &&
            segment.date.getHours() < 13
          ) {
            segment.cssClass = 'amineColor';
          } else
            segment.cssClass = 'amineColor2';
        });
      });
    });
  }


  getInfo(clickedDate: Date) {

    const dialogRef = this.dialog.open(DialogCalenderComponent, {
      minWidth: "35vw", disableClose: false, data: {
        capacite: this.capacite, selectedEntity: this.selectedEntity, selectedSalle: this.selectedSalle
      }
    }

    );
    dialogRef.afterClosed().subscribe(result => {
      if (result != null && result != "") {
        let str = JSON.stringify(clickedDate);
        let d = JSON.parse(str).date;
        this.dtc = new Date(d);
        for (let event of this.events) {
          if (event.start.getDate() === this.dtc.getDate())
            this.lista.push(event);
        }


        let y = 0;

        if (this.lista.length != 0) {
          if (this.dtc.getHours() < 13) {
            let x: Date;
            for (let e of this.lista) {
              if (e.start.getHours() < 13)
                x = e.start;
            }
            if (x != null) {
              if (x.getMinutes() == 30)
                y = 1;
              else
                y = 0.5;
              y = x.getHours() + y;
            } else
              y = 8;
          } else {
            let x: Date;
            for (let e of this.lista) {
              if (e.start.getHours() >= 13)
                x = e.start;
            }
            if (x != null) {
              if (x.getMinutes() == 30)
                y = 1;
              else
                y = 0.5;
              y = x.getHours() + y;
            } else {
              y = 13;
            }
          }

        }
        else {
          if (this.dtc.getHours() >= 13)
            y = 13;
          else
            y = 8;
        }
        this.capacite = result.capacite
        let salle;
        let entity;
        salle = this.listSalle.filter(salle => salle.id == result.selectedSalle);
        entity = this.listEntity.filter(entity => entity.id == result.selectedEntity);
        if (this.currentLang === 'ar') {
          salle = salle[0].libelleAr;
          entity = entity[0].libelleAr;
        }
        else {
          salle = salle[0].libelleFr;
          entity = entity[0].libelleFr;
        }

        let title = entity + " " + salle + " " + "(" + this.capacite + ")";

        let plan: planningSalle = new planningSalle();
        plan.idNmEntite = result.selectedEntity;
        plan.capacite = result.capacite;
        plan.idNmSalle = result.selectedSalle;

        if (this.dtc.getDay() == 1 && this.dtc.getHours() < 13)
          plan.idNmSeance = 1;
        else if (this.dtc.getDay() == 1 && this.dtc.getHours() >= 13)
          plan.idNmSeance = 2;
        if (this.dtc.getDay() == 2 && this.dtc.getHours() < 13)
          plan.idNmSeance = 3;
        else if (this.dtc.getDay() == 2 && this.dtc.getHours() >= 13)
          plan.idNmSeance = 4;
        if (this.dtc.getDay() == 3 && this.dtc.getHours() < 13)
          plan.idNmSeance = 5;
        else if (this.dtc.getDay() == 3 && this.dtc.getHours() >= 13)
          plan.idNmSeance = 6;
        if (this.dtc.getDay() == 4 && this.dtc.getHours() < 13)
          plan.idNmSeance = 7;
        else if (this.dtc.getDay() == 4 && this.dtc.getHours() >= 13)
          plan.idNmSeance = 8;
        if (this.dtc.getDay() == 5 && this.dtc.getHours() < 13)
          plan.idNmSeance = 9;
        else if (this.dtc.getDay() == 5 && this.dtc.getHours() >= 13)
          plan.idNmSeance = 10;


        plan.hour = y;
        this.plannigService.saveCalendar(plan).subscribe(
          response => {
            if (response['code'] === CONSTANTE_WS.SUCCESS) {
              this.toastr.success('', this.translate.instant('dossiers.successMsg'));
            }

            else this.toastr.error(this.translate.instant('message.error.intern'), '');
          }
        )

        this.events = [
          ...this.events,
          {
            title: title,
            start: addHours(startOfDay(this.dtc), y),
            color: colors.yellow,
            draggable: true,
            actions: [
              {
                label: '<i class="fa fa-pencil" aria-hidden="true"></i>',
                onClick: ({ event }: { event: CalendarEvent }): void => {

                  const ta = this.dialog.open(DialogCalenderComponent, {
                    minWidth: "35vw", disableClose: false, data: { capacite: result.capacite, selectedEntity: result.selectedEntity, selectedSalle: result.selectedSalle }

                  }


                  );
                  ta.afterClosed().subscribe(result => {
                    console.log('Edit result:::: ', result);
                  })
                },
              },
              {
                label: '<i class="fa fa-trash" aria-hidden="true"></i>',
                onClick: ({ event }: { event: CalendarEvent }): void => {
                  this.events = this.events.filter((iEvent) => iEvent !== event);

                },
              },
            ],
          },
        ];
        console.log('last DATA', this.events);
        this.capacite = null;
        this.lista = [];
        this.refresh.next()
      }
    });

  }

}
