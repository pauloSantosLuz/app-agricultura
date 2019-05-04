import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OccurrencetypeListComponent } from './occurrencetype-list/occurrencetype-list.component';
import { Routes, RouterModule } from '@angular/router';
import { MatTableModule, MatIconModule, MatButtonModule, MatSortModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatDialogModule, MatCardModule } from '@angular/material';
import { ConfimDeleteDialogComponent } from './confim-delete-dialog/confim-delete-dialog.component';
import { OccurrencetypeService } from './occurrencetype.service';
import { OccurrencetypeInsertComponent } from './occurrencetype-insert/occurrencetype-insert.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OccurrencetypeUpdateComponent } from './occurrencetype-update/occurrencetype-update.component';

const routes: Routes =[
  {path:'list',component: OccurrencetypeListComponent},
  {path:'insert',component: OccurrencetypeInsertComponent},
  {path:'update',component: OccurrencetypeUpdateComponent}
]


@NgModule({
  declarations: [OccurrencetypeListComponent, ConfimDeleteDialogComponent, OccurrencetypeInsertComponent, OccurrencetypeUpdateComponent],
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
  ],
  entryComponents:[ConfimDeleteDialogComponent],
  providers:[OccurrencetypeService]
})
export class OccurrencetypeModule { }
