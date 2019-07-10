import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-precipitation-delete',
  templateUrl: './precipitation-delete.component.html',
  styleUrls: ['./precipitation-delete.component.css']
})
@Injectable({ providedIn: 'root' })
export class PrecipitationDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data) { }


  ngOnInit() {
  }

}
