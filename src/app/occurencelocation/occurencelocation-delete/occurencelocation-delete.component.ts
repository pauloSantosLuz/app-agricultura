import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-occurencelocation-delete',
  templateUrl: './occurencelocation-delete.component.html',
  styleUrls: ['./occurencelocation-delete.component.css']
})
@Injectable({ providedIn: 'root' })
export class OccurencelocationDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

}
