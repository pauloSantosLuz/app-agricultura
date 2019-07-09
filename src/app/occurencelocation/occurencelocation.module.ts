import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule, MatIconModule, MatButtonModule, MatSortModule, MatFormFieldModule, MatPaginatorModule, MatInputModule, MatCardModule, MatDialogModule, MatOptionModule, MatSelectModule, MatGridListModule, MatToolbarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { OccurencelocationListComponent } from './occurencelocation-list/occurencelocation-list.component';
import { OccurencelocationInsertComponent } from './occurencelocation-insert/occurencelocation-insert.component';
import { OccurencelocationDeleteComponent } from './occurencelocation-delete/occurencelocation-delete.component';
import { OccurencelocationService } from './occurencelocation.service';
import { OccurencelocationUpdateComponent } from './occurencelocation-update/occurencelocation-update.component';
import { OccurencelocationDetailsComponent } from './occurencelocation-details/occurencelocation-details.component';

const routes: Routes =[
  {path:'insert',component: OccurencelocationInsertComponent},
  {path:'details',component: OccurencelocationDetailsComponent},
  {path:'list',component: OccurencelocationListComponent},
 {path:'update',component: OccurencelocationUpdateComponent}
]

@NgModule({
  declarations: [OccurencelocationListComponent, OccurencelocationInsertComponent, OccurencelocationDeleteComponent, OccurencelocationUpdateComponent, OccurencelocationDetailsComponent],
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
    MatGridListModule,
    MatToolbarModule,
    RouterModule.forChild(routes)
  ],
  entryComponents:[OccurencelocationDeleteComponent],
  providers:[OccurencelocationService],
})
export class OccurencelocationModule { }
