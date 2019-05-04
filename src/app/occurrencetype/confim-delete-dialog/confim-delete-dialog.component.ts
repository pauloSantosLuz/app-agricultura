import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-confim-delete-dialog',
  templateUrl: './confim-delete-dialog.component.html',
  styleUrls: ['./confim-delete-dialog.component.css']
})
@Injectable({ providedIn: 'root' })
export class ConfimDeleteDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

}
