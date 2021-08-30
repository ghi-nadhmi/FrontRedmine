import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'highlightText'
})
export class HighlightTextPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: any, args?: any): any {
    console.log(value);
    console.log(args);
    if (!args) {
      console.log('!args');
      return value;
    }

    // Match in a case insensitive maneer
    const re = new RegExp(args, 'gi');
    const match = value.match(re);

    // If there's no match, just return the original value.
    if (!match) {
      return value;
    }
    //
    let replacedValue = '';
    let newV = '';

    for (const e of value) {
      newV = match.indexOf(e) !== -1 ? '<mark>' + e + '</mark>' : e;
      replacedValue += newV;
    }
    console.log(replacedValue);
    console.log(this.sanitizer.bypassSecurityTrustHtml(replacedValue));
    return this.sanitizer.bypassSecurityTrustHtml(replacedValue);
  }

}
