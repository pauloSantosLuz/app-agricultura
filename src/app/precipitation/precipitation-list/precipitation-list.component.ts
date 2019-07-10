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

  message;
  displayedColumns: string[] = ['id','description','collectionType','volume','startDate','endDate','area', 'update', 'delete'];
  public occurrencestype: Precipitation[];
  public dataSource = new MatTableDataSource<Precipitation>();

//
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    private occurrencetypeService: PrecipitationService,
    private router: Router,
    public dialog: MatDialog
  ) {
    iconRegistry.addSvgIcon('iconDel', sanitizer.bypassSecurityTrustResourceUrl('assets/rubbish-bin-delete-button.svg'));
    iconRegistry.addSvgIcon('iconADD', sanitizer.bypassSecurityTrustResourceUrl('assets/add.svg'));
    iconRegistry.addSvgIcon('iconUp', sanitizer.bypassSecurityTrustResourceUrl('assets/sharp-system_update-24px.svg'));
  }
//
  ngOnInit() {

    this.occurrencetypeService.getPrecipitation().subscribe(
      (data: Precipitation[]) => {
        this.dataSource.data = data; 
      },
      (error) => {
        console.log(error);
      }
    );
  }
//

  /*onDelete(id:string,description:string){//deleta uma occorencia apos confirmação
    this.occurrencetypeService.openConfimDialog(description).afterClosed().subscribe(res =>{
      if(res){
        this.occurrencetypeService.deleteOccurrencetype(id).subscribe(
          (data) => {
            // recarega pagina
            this.ngOnInit();
          },
          (error) => {
            this.message = error;
          }
        );
      }
    });
  }*/

  

  //ordenação
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;//cria paginas na tabela
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;//cria paginas na tabela
  }

  //pesquisa item na tabela
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();

  }
}