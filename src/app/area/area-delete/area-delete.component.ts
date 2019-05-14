import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-area-delete',
  templateUrl: './area-delete.component.html',
  styleUrls: ['./area-delete.component.css']
})
@Injectable({ providedIn: 'root' })
export class AreaDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

}
