import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-entite',
  templateUrl: './delete-entite.component.html',
  styleUrls: ['./delete-entite.component.scss']
})
export class DeleteEntiteComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteEntiteComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  closeDialog(){
    this.dialogRef.close(false) ; 
 
  }

}
