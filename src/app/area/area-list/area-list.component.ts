import { Component, OnInit, ViewChild } from '@angular/core';
import { Area } from '../area.model';
import { MatTableDataSource, MatIconRegistry, MatDialog, MatSort, MatPaginator } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { AreaService } from '../area.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.css']
})
export class AreaListComponent implements OnInit {
  message;
  displayedColumns: string[] = ['id', 'descrição','view', 'update', 'delete'];
  public area: Area;
  public dataSource = new MatTableDataSource<Area>();
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    private areaService: AreaService,
    private router: Router,
    public dialog: MatDialog
  ) {
    iconRegistry.addSvgIcon('iconDel', sanitizer.bypassSecurityTrustResourceUrl('assets/rubbish-bin-delete-button.svg'));
    iconRegistry.addSvgIcon('iconUp', sanitizer.bypassSecurityTrustResourceUrl('assets/sharp-system_update-24px.svg'));
    iconRegistry.addSvgIcon('iconDetails', sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-view_list-24px.svg'));
  }


  ngOnInit() {

    this.areaService.getAreas().subscribe(
      (data: Area[]) => {
        this.dataSource.data = data; 
      },
      (error) => {
        console.log(error);
      }
    );

  }
  onDelete(id:string,description:string){//deleta uma occorencia apos confirmação
    this.areaService.openConfimDialog(description).afterClosed().subscribe(res =>{
      if(res){
        this.areaService.deleteArea(id).subscribe(
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
