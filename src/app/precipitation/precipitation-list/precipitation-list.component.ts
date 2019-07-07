import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatIconRegistry, MatDialog, MatSort, MatPaginator } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PrecipitationService } from '../precipitation.service';
import { Precipitation } from '../precipitation.model';
import { Occurrencetype } from 'src/app/occurrencetype/occurrencetype.model';
import { OccurrencetypeService } from 'src/app/occurrencetype/occurrencetype.service';

@Component({
  selector: 'app-precipitation-list',
  templateUrl: './precipitation-list.component.html',
  styleUrls: ['./precipitation-list.component.css']
})
export class PrecipitationListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'description', 'update', 'delete'];
  public dataSource = new MatTableDataSource<Occurrencetype>();

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    private router: Router,
    public dialog: MatDialog
  ) {
    iconRegistry.addSvgIcon('iconDel', sanitizer.bypassSecurityTrustResourceUrl('assets/rubbish-bin-delete-button.svg'));
    iconRegistry.addSvgIcon('iconUp', sanitizer.bypassSecurityTrustResourceUrl('assets/sharp-system_update-24px.svg'));
  }

  ngOnInit(){}

  //pesquisa item na tabela
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();

  }
}
