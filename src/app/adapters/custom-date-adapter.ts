import { MAT_DATE_LOCALE } from "@angular/material/core";
import { Inject, Optional } from "@angular/core";
import * as moment from "moment";
import {MomentDateAdapter} from "@angular/material-moment-adapter";

export class CustomDateAdapter extends MomentDateAdapter {
  constructor(@Optional() @Inject(MAT_DATE_LOCALE) dateLocale: string) {
    super(dateLocale, { useUtc: true });
  }

  format(date: moment.Moment, displayFormat: string): string {
    return super.format(date, displayFormat);
  }

  parse(value: any, parseFormat: string | string[]): moment.Moment | null {
    return super.parse(value, parseFormat);
  }
}
