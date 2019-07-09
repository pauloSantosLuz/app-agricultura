import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatIconRegistry, MatDialog, MatSort, MatPaginator } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Occurrencelocation } from 'src/app/occurence/occurrencelocation.model';
import { OccurencelocationService } from '../occurencelocation.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-occurencelocation-list',
  templateUrl: './occurencelocation-list.component.html',
  styleUrls: ['./occurencelocation-list.component.css']
})
export class OccurencelocationListComponent implements OnInit {

  message;
  displayedColumns: string[] = ['id', 'description','details', 'update', 'delete'];
  public occurrenceslocation: Occurrencelocation[];
  public dataSource = new MatTableDataSource<Occurrencelocation>();


  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    private occurrencelocationService: OccurencelocationService,
    public dialog: MatDialog, private activateRoute: ActivatedRoute, 
    private location: Location
  ) {
    iconRegistry.addSvgIcon('iconDel', sanitizer.bypassSecurityTrustResourceUrl('assets/rubbish-bin-delete-button.svg'));
    iconRegistry.addSvgIcon('iconADD', sanitizer.bypassSecurityTrustResourceUrl('assets/add.svg'));
    iconRegistry.addSvgIcon('iconUp', sanitizer.bypassSecurityTrustResourceUrl('assets/sharp-system_update-24px.svg'));
    iconRegistry.addSvgIcon('iconDetails', sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-view_list-24px.svg'));
  }

  idOccurrence;
  occurreDesc;
  geometriaArea;
  ngOnInit() {
    this.idOccurrence = this.activateRoute.snapshot.params['idOccurrence'];
    this.occurreDesc = this.activateRoute.snapshot.params['occurreDesc'];
    this.geometriaArea = this.activateRoute.snapshot.params['geometriaArea'];

    this.occurrencelocationService.getOccurrenceLocation(this.idOccurrence).subscribe(
      (data: Occurrencelocation[]) => {
        this.dataSource.data = data; 
      },
      (error) => {
        console.log(error);
      }
    );
  }
  volta() {
    this.location.back();
  }

  onDelete(id:string,description:string){//deleta uma occorencia apos confirmação
    this.occurrencelocationService.openConfimDialog(description).afterClosed().subscribe(res =>{
      if(res){
        this.occurrencelocationService.deleteOccurrenceLocation(id).subscribe(
          () => {
            // recarega pagina
            this.ngOnInit();
          },
          (error) => {
            this.message = error;
          }
        );
      }
    });
  }

  

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
