import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaListComponent } from './area-list/area-list.component';
import { MatTableModule, MatIconModule, MatButtonModule, MatSortModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatDialogModule, MatCardModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AreaDetailsComponent } from './area-details/area-details.component';
import { AreaInsertComponent } from './area-insert/area-insert.component';
import { AreaDeleteComponent } from './area-delete/area-delete.component';
import { AreaService } from './area.service';
import { AreaUpdateComponent } from './area-update/area-update.component';

const routes: Routes =[
  {path:'list',component: AreaListComponent},
  {path:'details',component: AreaDetailsComponent},
  {path:'insert',component: AreaInsertComponent},
  {path:'update',component: AreaUpdateComponent}
]


@NgModule({
  declarations: [AreaListComponent, AreaDetailsComponent, AreaInsertComponent, AreaDeleteComponent, AreaUpdateComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatOptionModule,
    MatSelectModule,
    RouterModule.forChild(routes)
  ], 
  entryComponents:[AreaDeleteComponent],
  providers:[AreaService]
})
export class AreaModule { }
