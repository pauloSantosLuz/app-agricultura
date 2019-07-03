import { Component, OnInit, ViewChild } from '@angular/core';
import { Occurrencetype } from '../occurrencetype.model';
import { MatTableDataSource, MatIconRegistry, MatDialog, MatSort, MatPaginator } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { OccurrencetypeService } from '../occurrencetype.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-occurrencetype-list',
  templateUrl: './occurrencetype-list.component.html',
  styleUrls: ['./occurrencetype-list.component.css']
})
export class OccurrencetypeListComponent implements OnInit {

  message;
  displayedColumns: string[] = ['id', 'description', 'update', 'delete'];
  public occurrencestype: Occurrencetype[];
  public dataSource = new MatTableDataSource<Occurrencetype>();


  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    private occurrencetypeService: OccurrencetypeService,
    private router: Router,
    public dialog: MatDialog
  ) {
    iconRegistry.addSvgIcon('iconDel', sanitizer.bypassSecurityTrustResourceUrl('assets/rubbish-bin-delete-button.svg'));
    iconRegistry.addSvgIcon('iconUp', sanitizer.bypassSecurityTrustResourceUrl('assets/sharp-system_update-24px.svg'));
  }

  ngOnInit() {

    this.occurrencetypeService.getOccurrencetype().subscribe(
      (data: Occurrencetype[]) => {
        this.dataSource.data = data; 
      },
      (error) => {
        console.log(error);
      }
    );
  }


  onDelete(id:string,description:string){//deleta uma occorencia apos confirmação
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
