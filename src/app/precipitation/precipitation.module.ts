import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrecipitationInsertComponent } from './precipitation-insert/precipitation-insert.component';
import { MatTableModule, MatIconModule, MatButtonModule, MatSortModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatDialogModule, MatCardModule, MatDatepickerModule, MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes =[
  {path:'insert',component: PrecipitationInsertComponent}
]
@NgModule({
  declarations: [PrecipitationInsertComponent],
  imports: [
    MatDatepickerModule,
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
    MatSelectModule,
    RouterModule.forChild(routes)  ]
})
export class PrecipitationModule { }
