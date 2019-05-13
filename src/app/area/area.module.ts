import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaListComponent } from './area-list/area-list.component';
import { MatTableModule, MatIconModule, MatButtonModule, MatSortModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatDialogModule, MatCardModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AreaDetailsComponent } from './area-details/area-details.component';

const routes: Routes =[
  {path:'list',component: AreaListComponent},
  {path:'details',component: AreaDetailsComponent}
  //{path:'update',component: OccurrencetypeUpdateComponent}
]


@NgModule({
  declarations: [AreaListComponent, AreaDetailsComponent],
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
    RouterModule.forChild(routes)
  ]
})
export class AreaModule { }
