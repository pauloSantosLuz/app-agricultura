import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrecipitationInsertComponent } from './precipitation-insert/precipitation-insert.component';
import { MatTableModule, MatIconModule, MatButtonModule, MatSortModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatDialogModule, MatCardModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes =[
]
@NgModule({
  declarations: [PrecipitationInsertComponent],
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
    RouterModule.forChild(routes)  ]
})
export class PrecipitationModule { }
