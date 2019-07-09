import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-occurence-delete',
  templateUrl: './occurence-delete.component.html',
  styleUrls: ['./occurence-delete.component.css']
})
@Injectable({ providedIn: 'root' })
export class OccurenceDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

}
