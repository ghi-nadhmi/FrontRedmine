import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-delete-objet-saisi',
  templateUrl: './delete-objet-saisi.component.html',
  styleUrls: ['./delete-objet-saisi.component.scss']
})
export class DeleteObjetSaisiComponent implements OnInit {
  
  currentLang: string;
  constructor(private dialogRef: MatDialogRef<DeleteObjetSaisiComponent>,
    @Inject(MAT_DIALOG_DATA) data,private translate: TranslateService
) {
    this.translate.onDefaultLangChange.subscribe((language) => {
      console.log(this.translate.getDefaultLang() + ' vs ' + language.lang);
      this.currentLang = language.lang;
  });

   }

  ngOnInit() {
    this.currentLang = this.translate.getDefaultLang();
  }

  onCancel() {
    this.dialogRef.close();
   }
  close(feedback = null): void {
  this.dialogRef.close(feedback);
  }
  delete(): void {
  this.close({status: 'OK'});
}


}
