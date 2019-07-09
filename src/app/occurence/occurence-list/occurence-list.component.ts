import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatIconRegistry, MatDialog, MatSort, MatPaginator } from '@angular/material';
import { Occurrence } from '../occurrence.model';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { OccurenceService } from '../occurence.service';
import { Occurrencelocation } from '../occurrencelocation.model';

@Component({
  selector: 'app-occurence-list',
  templateUrl: './occurence-list.component.html',
  styleUrls: ['./occurence-list.component.css']
})
export class OccurenceListComponent implements OnInit {

  message;
  displayedColumns: string[] = ['id', 'description','view', 'update', 'delete','location'];
  public occurrences: Occurrence[];
  public occurencelocation: Occurrencelocation[];
  public dataSource = new MatTableDataSource<Occurrence>();


  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    private occurrenceService: OccurenceService,
    public dialog: MatDialog, private activateRoute: ActivatedRoute
  ) {
    iconRegistry.addSvgIcon('iconDel', sanitizer.bypassSecurityTrustResourceUrl('assets/rubbish-bin-delete-button.svg'));
    iconRegistry.addSvgIcon('iconADD', sanitizer.bypassSecurityTrustResourceUrl('assets/add.svg'));
    iconRegistry.addSvgIcon('iconDetails', sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-view_list-24px.svg'));
    iconRegistry.addSvgIcon('iconUp', sanitizer.bypassSecurityTrustResourceUrl('assets/sharp-system_update-24px.svg'));
    iconRegistry.addSvgIcon('iconLocation', sanitizer.bypassSecurityTrustResourceUrl('assets/location.svg'));
  }
  id;
  areaDesc;
  geometria;
  ngOnInit() {
    this.id = this.activateRoute.snapshot.params['id'];
    this.areaDesc = this.activateRoute.snapshot.params['description'];
    this.geometria = this.activateRoute.snapshot.params['geometria'];
    this.occurrenceService.getOccurenceByArea(this.id).subscribe(
      (data: Occurrence[]) => {
        this.dataSource.data = data;
      },
      (error) => {
        console.log(error);
      }
    );
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

  onDelete(id: number, description: string) {//deleta uma occorencia apos confirmação
    this.occurrenceService.openConfimDialog(description).afterClosed().subscribe(res => {
      if (res) {
        
        //busca todas as localizaçoes de uma ocorrencia
        this.occurrenceService.getOccurrenceLocation(id).subscribe(
          (data: Occurrencelocation[]) => {
          //delete todas as localizaçoes de uma ocorrencia
            for (var x = 0; x < data.length; x++) {
              this.occurrenceService.deleteOccurrenceLocation(data[x].id.toString()).subscribe(
                () => {  },
                (error) => {
                  this.message = error;
                }
              );
            }
            //deleta uma ocorrencia
            this.occurrenceService.deleteOccurrence(id.toString()).subscribe(
              () => {
                // recarega pagina
                this.ngOnInit();
              },
              (error) => {
                this.message = error;
              }
            );
          },
          (error) => {
            console.log(error);
          }
        );

        
      }
    });
  }

}
