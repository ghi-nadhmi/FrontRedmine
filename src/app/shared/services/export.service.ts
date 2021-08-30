import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import * as moment from 'moment';

import pdfMake from 'pdfmake/build/pdfmake';

import pdfFonts from 'pdfmake/build/vfs_fonts';


pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { TranslateService } from '@ngx-translate/core';
import { ExportToCsv } from 'export-to-csv';
 

 //pdfMake.vfs = pdfFonts.pdfMake.vfs;
//(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

export class headerTable {
  text : string ;
  style : string ;
  alignment : string ;
  fillColor : string ;
  color;
  
  }
@Injectable({
  providedIn: 'root'
})
export class ExportService {
  currentLang: string;
  constructor(private translate: TranslateService,) {
    this.translate.onDefaultLangChange.subscribe((language) => {
      console.log(this.translate.getDefaultLang() + ' vs ' + language.lang);
      this.currentLang = language.lang;
    });
  }
  testArabicWord(word: any) {
 

    var arabic = /[\u0600-\u06FF]/;
    arabic.test(word);
    if (arabic.test(word)) {
      return word.split(" ").reverse().join(" ")
    }
    else return word;
  
 

}
republic: string = "";

exportPdf (fPortrait , liste  ,tabName)
{
if(fPortrait ==1)
{
  if(this.currentLang =="ar")
  this.exportPdfPortrait(liste,tabName)
  else 
  this.exportPdfPortraitFr(liste,tabName) 
 

}
else 
{
 if(this.currentLang =="ar")
  this.exportPdfPaysage(liste,tabName)
  else 
  this.exportPdfPaysageFr(liste,tabName)
}

}




 exportPdfPortraitFr(liste, tabName) {


    let repub = this.testArabicWord(this.translate.instant('Republique'))
    let minsit = this.testArabicWord(this.translate.instant('Ministere'))
let ListName : string = this.testArabicWord(this.translate.
  instant(tabName));

  let pdfName : string =this.translate.
    instant(tabName)+'.pdf';
    let logpdf = this.testArabicWord(this.translate.instant('logpdf'))
    pdfMake.vfs["assets/fonts/Amiri/Amiri-Regular.ttf"] = environment.amiriRegular;


    pdfMake.fonts = {

      Amiri: {
        normal: "Amiri-Regular.ttf"

      }
    };

    let today = moment(new Date()).format('DD/MM/yyyy');

    var docDefinition = {

      footer: function (currentPage, pageCount) {
        return {
  text: 'Page ' + currentPage + ' / ' + pageCount, alignment: 'center'

        }

 },

  info: {
        title: ListName,
      },
      pageMargins: [25, 120, 25, 25],

      header: function () {


        return {

          table: {
            widths: ['30%', '40%', '30%',],
            headerRows: 1,
            body: [
              [{
                margin: [20, 10, 0, 0],
                image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADGCAMAAACgjD/cAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAxQTFRFAKlc0Bwf/9cA////bdtycAAAAAR0Uk5T////AEAqqfQAAAOpSURBVHja7N3LduswCAXQA/7/f+7g3kFXG9uIl4CKcSqx47iJbAtwDQkcyEvQbbSBkCiKQ2gtakJIFdUgZIkyEDJHBQg5xWYIOcZGCHnHFgiFRD6EoiIXQpGRB6HgSIJQQmRAKCeiIZQWsRDKjDgIJUcUhKiuBJUZKxQUd4glqO6QSlDeIZSgvkNGQQOGSIIWDoEEPRzvEjRxvErQxfEmQRvHiwR9HM+SVhBSQ4jaSNDKoYQQNZKgl+NegmaOW0k/CC1CUDbWIEAzCfo5PkuGQ4B2EnR0fJKMhgANJV0hEEAwBAK0lMyFAD0lYyFAU8lUCNBVMhQCtJWkQJgPRCxBxidrCoQ54bOFlAOScEgOZM0RL8Gjg2tBWA/hA/nh8Bnp4bOFxzPkQOpB2MvhMpIEgq4QREFYGKkQ3SEJc2RDEMB4SEUKiZB4niL/JXj+naU+Sb0ZT5lIId4S9ILcUgyDGSDuEtPX0S4Ichz/JHhZU7GrJGgl8KcgMJ+hXme6D4R3Ql7/dgOEt0O8fqiErMxEEIPkW/ZsH+XlmpAcwqYU1KOwP4Rtb2UKxD6U4B+36d1gOEJYkYPxK4k9IUrJp9drxpDMvAzhtSSsS2d2hugkN69dGIIjIWG3B0yzSiHgDRQOh3A643VGMSRdwjkQLuZYgLit9WLWlQYI5zl8IY5XRALmEf36zZXoZjFC/CnaOZYg4GiKfoI1CDiUwibHEsT3srRo6FyI3WIcdxkCjqDYB12HIOKGmn1ABeTt7qCjYmEwyf2R1cnF83ve+VVBhA8ExI7w26GAiB9t+HxdK+DBCC1kMSNdIAOCWg5InnzYJEEWBOUcWgjqOIyQOMpyIlYIijggeaYxn6J12CDYz3CCOFPgAtkuUS5nvCBeFNgcHhAPin5u5/0juxjuEAsFHg7XHT3pijuIw96kXEXs9r08xT3EbbtYCiIDknX9fv7u6bMxvxzkFK8oBzkFXspBThGkcpAx9bXmVDybU4PulDcsBxlTOfMUZa0HGVPvd04F5jk1sedUKR9TN35OJf85vRXmdLuY039kTkeYMT165nRNmtPHak5nsTm93ipQTj/EsR0q5/QMndPFdU5f3WtMp+NrTu/pa0w38GtOf/Y8yhUOuQoydJB4iiIlHSSYciVCAim6dPSQIIo2GQskgKJPxQbxpZgSsUL8KMY07BAXiz0HF4jR4pKAF0Rt8ZrdEbKO8ZzZGSLHeM8aAHnjxMwXBsmOAzmQA3mOLwEGAGFEtm8rMLprAAAAAElFTkSuQmCC'
                , width: 70 },
  {
                margin: [0, 80, 0, 0],
                text: ListName, alignment: 'center', fontSize: 15,
  },
              {
                margin: [30, 10, 0, 0],
                text: logpdf,
              },

              ],

            ]

            , content: [
              {}
              , {},
              {}

            ],

          },
          layout: 'lightHorizontalLines'
        };

      }
, content: [
        liste
      ],
      defaultStyle: {
        font: 'Amiri'
      }
    }

pdfMake.createPdf(docDefinition).download(pdfName);
  }



  exportPdfPortrait(liste, tabName) {


    let repub = this.testArabicWord(this.translate.instant('Republique'))
    let minsit = this.testArabicWord(this.translate.instant('Ministere'))
let ListName : string = this.testArabicWord(this.translate.
  instant(tabName));

  let pdfName : string =this.translate.
    instant(tabName)+'.pdf';
    let logpdf = this.testArabicWord(this.translate.instant('logpdf'))
    pdfMake.vfs["assets/fonts/Amiri/Amiri-Regular.ttf"] = environment.amiriRegular;


    pdfMake.fonts = {

      Amiri: {
        normal: "Amiri-Regular.ttf"

      }
    };

    let today = moment(new Date()).format('DD/MM/yyyy');

    var docDefinition = {

      footer: function (currentPage, pageCount) {
        return {
  text: 'Page ' + currentPage + ' / ' + pageCount, alignment: 'center'

        }

 },

  info: {
        title: ListName,
      },
      pageMargins: [25, 120, 25, 25],

      header: function () {


        return {

          table: {
            widths: ['30%', '40%', '30%',],
            headerRows: 1,
            body: [
              [
                {
                  margin: [20, 10, 0, 0],
                  text: logpdf,
                },
             
  {
                margin: [0, 80, 0, 0],
                text: ListName, alignment: 'center', fontSize: 15,
  },   {
    margin: [30, 10, 0, 0],
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADGCAMAAACgjD/cAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAxQTFRFAKlc0Bwf/9cA////bdtycAAAAAR0Uk5T////AEAqqfQAAAOpSURBVHja7N3LduswCAXQA/7/f+7g3kFXG9uIl4CKcSqx47iJbAtwDQkcyEvQbbSBkCiKQ2gtakJIFdUgZIkyEDJHBQg5xWYIOcZGCHnHFgiFRD6EoiIXQpGRB6HgSIJQQmRAKCeiIZQWsRDKjDgIJUcUhKiuBJUZKxQUd4glqO6QSlDeIZSgvkNGQQOGSIIWDoEEPRzvEjRxvErQxfEmQRvHiwR9HM+SVhBSQ4jaSNDKoYQQNZKgl+NegmaOW0k/CC1CUDbWIEAzCfo5PkuGQ4B2EnR0fJKMhgANJV0hEEAwBAK0lMyFAD0lYyFAU8lUCNBVMhQCtJWkQJgPRCxBxidrCoQ54bOFlAOScEgOZM0RL8Gjg2tBWA/hA/nh8Bnp4bOFxzPkQOpB2MvhMpIEgq4QREFYGKkQ3SEJc2RDEMB4SEUKiZB4niL/JXj+naU+Sb0ZT5lIId4S9ILcUgyDGSDuEtPX0S4Ichz/JHhZU7GrJGgl8KcgMJ+hXme6D4R3Ql7/dgOEt0O8fqiErMxEEIPkW/ZsH+XlmpAcwqYU1KOwP4Rtb2UKxD6U4B+36d1gOEJYkYPxK4k9IUrJp9drxpDMvAzhtSSsS2d2hugkN69dGIIjIWG3B0yzSiHgDRQOh3A643VGMSRdwjkQLuZYgLit9WLWlQYI5zl8IY5XRALmEf36zZXoZjFC/CnaOZYg4GiKfoI1CDiUwibHEsT3srRo6FyI3WIcdxkCjqDYB12HIOKGmn1ABeTt7qCjYmEwyf2R1cnF83ve+VVBhA8ExI7w26GAiB9t+HxdK+DBCC1kMSNdIAOCWg5InnzYJEEWBOUcWgjqOIyQOMpyIlYIijggeaYxn6J12CDYz3CCOFPgAtkuUS5nvCBeFNgcHhAPin5u5/0juxjuEAsFHg7XHT3pijuIw96kXEXs9r08xT3EbbtYCiIDknX9fv7u6bMxvxzkFK8oBzkFXspBThGkcpAx9bXmVDybU4PulDcsBxlTOfMUZa0HGVPvd04F5jk1sedUKR9TN35OJf85vRXmdLuY039kTkeYMT165nRNmtPHak5nsTm93ipQTj/EsR0q5/QMndPFdU5f3WtMp+NrTu/pa0w38GtOf/Y8yhUOuQoydJB4iiIlHSSYciVCAim6dPSQIIo2GQskgKJPxQbxpZgSsUL8KMY07BAXiz0HF4jR4pKAF0Rt8ZrdEbKO8ZzZGSLHeM8aAHnjxMwXBsmOAzmQA3mOLwEGAGFEtm8rMLprAAAAAElFTkSuQmCC'
    , width: 70 },
            

              ],

            ]

            , content: [
              {}
              , {},
              {}

            ],

          },
          layout: 'lightHorizontalLines'
        };

      }
, content: [
        liste
      ],
      defaultStyle: {
        font: 'Amiri'
      }
    }

pdfMake.createPdf(docDefinition).download(pdfName);
  }







  exportPdfPaysage( liste, tabName) {
    let ListName  : string =  this.testArabicWord(this.translate.instant(tabName));
    
      let pdfName : string =   this.translate.
        instant(tabName) +'.pdf';

    let repub = this.testArabicWord(this.translate.instant('Republique'))
    let minsit = this.testArabicWord(this.translate.instant('Ministere'))

    let logpdf = this.testArabicWord(this.translate.instant('logpdf'))
    pdfMake.vfs["assets/fonts/Amiri/Amiri-Regular.ttf"] = environment.amiriRegular;


    pdfMake.fonts = {

      Amiri: {
        normal: "Amiri-Regular.ttf"

      }
    };

    let today = moment(new Date()).format('DD/MM/yyyy');

    var docDefinition = {
      pageOrientation: 'landscape',
      footer: function (currentPage, pageCount) {
        return {
  text: 'Page ' + currentPage + ' / ' + pageCount, alignment: 'center'

        }

 },

  info: {
        title: ListName,
      },
      pageMargins: [25, 120, 25, 25],

      header: function () {


        return {

          table: {
            widths: ['30%', '40%', '30%',],
            headerRows: 1,
            body: [
              [
                {
                  margin: [20, 10, 0, 0],
                  text: logpdf,
                },
               
  {
                margin: [0, 80, 0, 0],
                text: ListName, alignment: 'center', fontSize: 15,
  },
  {
    margin: [140, 10, 0, 0],
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADGCAMAAACgjD/cAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAxQTFRFAKlc0Bwf/9cA////bdtycAAAAAR0Uk5T////AEAqqfQAAAOpSURBVHja7N3LduswCAXQA/7/f+7g3kFXG9uIl4CKcSqx47iJbAtwDQkcyEvQbbSBkCiKQ2gtakJIFdUgZIkyEDJHBQg5xWYIOcZGCHnHFgiFRD6EoiIXQpGRB6HgSIJQQmRAKCeiIZQWsRDKjDgIJUcUhKiuBJUZKxQUd4glqO6QSlDeIZSgvkNGQQOGSIIWDoEEPRzvEjRxvErQxfEmQRvHiwR9HM+SVhBSQ4jaSNDKoYQQNZKgl+NegmaOW0k/CC1CUDbWIEAzCfo5PkuGQ4B2EnR0fJKMhgANJV0hEEAwBAK0lMyFAD0lYyFAU8lUCNBVMhQCtJWkQJgPRCxBxidrCoQ54bOFlAOScEgOZM0RL8Gjg2tBWA/hA/nh8Bnp4bOFxzPkQOpB2MvhMpIEgq4QREFYGKkQ3SEJc2RDEMB4SEUKiZB4niL/JXj+naU+Sb0ZT5lIId4S9ILcUgyDGSDuEtPX0S4Ichz/JHhZU7GrJGgl8KcgMJ+hXme6D4R3Ql7/dgOEt0O8fqiErMxEEIPkW/ZsH+XlmpAcwqYU1KOwP4Rtb2UKxD6U4B+36d1gOEJYkYPxK4k9IUrJp9drxpDMvAzhtSSsS2d2hugkN69dGIIjIWG3B0yzSiHgDRQOh3A643VGMSRdwjkQLuZYgLit9WLWlQYI5zl8IY5XRALmEf36zZXoZjFC/CnaOZYg4GiKfoI1CDiUwibHEsT3srRo6FyI3WIcdxkCjqDYB12HIOKGmn1ABeTt7qCjYmEwyf2R1cnF83ve+VVBhA8ExI7w26GAiB9t+HxdK+DBCC1kMSNdIAOCWg5InnzYJEEWBOUcWgjqOIyQOMpyIlYIijggeaYxn6J12CDYz3CCOFPgAtkuUS5nvCBeFNgcHhAPin5u5/0juxjuEAsFHg7XHT3pijuIw96kXEXs9r08xT3EbbtYCiIDknX9fv7u6bMxvxzkFK8oBzkFXspBThGkcpAx9bXmVDybU4PulDcsBxlTOfMUZa0HGVPvd04F5jk1sedUKR9TN35OJf85vRXmdLuY039kTkeYMT165nRNmtPHak5nsTm93ipQTj/EsR0q5/QMndPFdU5f3WtMp+NrTu/pa0w38GtOf/Y8yhUOuQoydJB4iiIlHSSYciVCAim6dPSQIIo2GQskgKJPxQbxpZgSsUL8KMY07BAXiz0HF4jR4pKAF0Rt8ZrdEbKO8ZzZGSLHeM8aAHnjxMwXBsmOAzmQA3mOLwEGAGFEtm8rMLprAAAAAElFTkSuQmCC'
    , width: 70 },

              ],

            ]

            , content: [
              {}
              , {},
              {}

            ],

          },
          layout: 'lightHorizontalLines'
        };

      }
, content: [
        liste
      ],
      defaultStyle: {
        font: 'Amiri'
      }
    }

pdfMake.createPdf(docDefinition).download(pdfName);
  }
  exportPdfPaysageFr( liste, tabName) {
    let ListName  : string =  this.testArabicWord(this.translate.instant(tabName));
    
      let pdfName : string =   this.translate.
        instant(tabName) +'.pdf';

    let repub = this.testArabicWord(this.translate.instant('Republique'))
    let minsit = this.testArabicWord(this.translate.instant('Ministere'))

    let logpdf = this.testArabicWord(this.translate.instant('logpdf'))
    pdfMake.vfs["assets/fonts/Amiri/Amiri-Regular.ttf"] = environment.amiriRegular;


    pdfMake.fonts = {

      Amiri: {
        normal: "Amiri-Regular.ttf"

      }
    };

    let today = moment(new Date()).format('DD/MM/yyyy');

    var docDefinition = {
      pageOrientation: 'landscape',
      footer: function (currentPage, pageCount) {
        return {
  text: 'Page ' + currentPage + ' / ' + pageCount, alignment: 'center'

        }

 },

  info: {
        title: ListName,
      },
      pageMargins: [25, 120, 25, 25],

      header: function () {


        return {

          table: {
            widths: ['30%', '40%', '30%',],
            headerRows: 1,
            body: [
              [{
                margin: [20, 10, 0, 0],
                image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADGCAMAAACgjD/cAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAxQTFRFAKlc0Bwf/9cA////bdtycAAAAAR0Uk5T////AEAqqfQAAAOpSURBVHja7N3LduswCAXQA/7/f+7g3kFXG9uIl4CKcSqx47iJbAtwDQkcyEvQbbSBkCiKQ2gtakJIFdUgZIkyEDJHBQg5xWYIOcZGCHnHFgiFRD6EoiIXQpGRB6HgSIJQQmRAKCeiIZQWsRDKjDgIJUcUhKiuBJUZKxQUd4glqO6QSlDeIZSgvkNGQQOGSIIWDoEEPRzvEjRxvErQxfEmQRvHiwR9HM+SVhBSQ4jaSNDKoYQQNZKgl+NegmaOW0k/CC1CUDbWIEAzCfo5PkuGQ4B2EnR0fJKMhgANJV0hEEAwBAK0lMyFAD0lYyFAU8lUCNBVMhQCtJWkQJgPRCxBxidrCoQ54bOFlAOScEgOZM0RL8Gjg2tBWA/hA/nh8Bnp4bOFxzPkQOpB2MvhMpIEgq4QREFYGKkQ3SEJc2RDEMB4SEUKiZB4niL/JXj+naU+Sb0ZT5lIId4S9ILcUgyDGSDuEtPX0S4Ichz/JHhZU7GrJGgl8KcgMJ+hXme6D4R3Ql7/dgOEt0O8fqiErMxEEIPkW/ZsH+XlmpAcwqYU1KOwP4Rtb2UKxD6U4B+36d1gOEJYkYPxK4k9IUrJp9drxpDMvAzhtSSsS2d2hugkN69dGIIjIWG3B0yzSiHgDRQOh3A643VGMSRdwjkQLuZYgLit9WLWlQYI5zl8IY5XRALmEf36zZXoZjFC/CnaOZYg4GiKfoI1CDiUwibHEsT3srRo6FyI3WIcdxkCjqDYB12HIOKGmn1ABeTt7qCjYmEwyf2R1cnF83ve+VVBhA8ExI7w26GAiB9t+HxdK+DBCC1kMSNdIAOCWg5InnzYJEEWBOUcWgjqOIyQOMpyIlYIijggeaYxn6J12CDYz3CCOFPgAtkuUS5nvCBeFNgcHhAPin5u5/0juxjuEAsFHg7XHT3pijuIw96kXEXs9r08xT3EbbtYCiIDknX9fv7u6bMxvxzkFK8oBzkFXspBThGkcpAx9bXmVDybU4PulDcsBxlTOfMUZa0HGVPvd04F5jk1sedUKR9TN35OJf85vRXmdLuY039kTkeYMT165nRNmtPHak5nsTm93ipQTj/EsR0q5/QMndPFdU5f3WtMp+NrTu/pa0w38GtOf/Y8yhUOuQoydJB4iiIlHSSYciVCAim6dPSQIIo2GQskgKJPxQbxpZgSsUL8KMY07BAXiz0HF4jR4pKAF0Rt8ZrdEbKO8ZzZGSLHeM8aAHnjxMwXBsmOAzmQA3mOLwEGAGFEtm8rMLprAAAAAElFTkSuQmCC'
                , width: 70 },
  {
                margin: [0, 80, 0, 0],
                text: ListName, alignment: 'center', fontSize: 15,
  },
              {
                margin: [30, 10, 0, 0],
                text: logpdf,
              },

              ],

            ]

            , content: [
              {}
              , {},
              {}

            ],

          },
          layout: 'lightHorizontalLines'
        };

      }
, content: [
        liste
      ],
      defaultStyle: {
        font: 'Amiri'
      }
    }

pdfMake.createPdf(docDefinition).download(pdfName);
  }
  styleHeaderFr (nameCols : string [])
  {  
    let body : headerTable [] = [] ;
    for(var i = 0 ; i <  nameCols.length  ; i++)
    {
      let headar = new headerTable ();
      headar.text = this.testArabicWord (this.translate.instant(nameCols[i]));
      headar.style ='tableHeader';
      headar.alignment ='center';
      headar.fillColor ='#57975b';
      headar.color ='#FFFFFF';
      body.push(headar);
    }
    return body;
  }
  StyleHeaderAr(nameCols : string [])
  {  
    let body : headerTable [] = [] ;
    for(var i = nameCols.length -1  ; i >=0    ; i--)
    { 
      let headar = new headerTable ();
      headar.text = this.testArabicWord (this.translate.instant(nameCols[i]));
      headar.style ='tableHeader';
      headar.alignment ='center';
      headar.fillColor ='#57975b';
      headar.color ='#FFFFFF';
      body.push(headar);
    }
    return body;
  }

  
convertHeaderCsv (nameCols : string [])
{
  let header : string [] = [] ;
  for(var i = 0 ; i <  nameCols.length  ; i++)
  {
 
    header.push(this.translate.instant(nameCols[i]));
  }
  return header;

}


exportCsv(list : any , nameCols : string [] , filename )
{
 let file = this.translate.instant(filename);
  const options = { 
    fieldSeparator: ';',
    quoteStrings: '"',
    decimalSeparator: '.',
    filename : file,
    showLabels: true, 
    showTitle: true,
   title: file,
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: false,
    headers:  this.convertHeaderCsv(nameCols)
  };
  const csvExporter = new ExportToCsv(options);
 
  csvExporter.generateCsv(list);
}


downloadFile(data, filename='data' , namecols ) {
    
  let csvData = this. ConvertToCSV(data, this. convertHeaderCsv (namecols));
 
  let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
  let dwldLink = document.createElement("a");
  let url = URL.createObjectURL(blob);
  
  dwldLink.setAttribute("href", url);
  dwldLink.setAttribute("download", filename + ".csv");
  dwldLink.style.visibility = "hidden";
  document.body.appendChild(dwldLink);
  dwldLink.click();
  document.body.removeChild(dwldLink) ;
}
















  ConvertToCSV(objArray, headerList) {
 
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = '';
   // let array =  objArray
    for (let index in headerList) {
        row += headerList[index] + ';';
    }
    row = row.slice(0, -1);
    str += row +'\r\n';
 
    for (let i = 0; i < array.length; i++) {
        let line = '';
        let k = array.length;
         
        for (let index in headerList) {
 
           let head = headerList[index];
 ;
           let items = array[i]     ;
let item ="";
for(let j = 0 ; j < items.length; j++)
{        
  for(let k = 0 ; k < headerList.length; k++)
{ 
    item   = item +  items [j] [k] + ';';
}
}

           
           if( headerList.indexOf(head) === headerList.length -1)
           {
       
           line += item  ;
           
           }
            else {
            if(k == i)
            {line  = item   ;
            k = k+1
            }
            }
        }
       
        str += line + '\r\n'; 
    }
    return str;
}
 
 

}
