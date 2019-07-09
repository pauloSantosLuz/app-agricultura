import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OccurenceInsertComponent } from './occurence-insert/occurence-insert.component';
import { MatTableModule, MatIconModule, MatButtonModule, MatSortModule, MatFormFieldModule, MatPaginatorModule, MatInputModule, MatCardModule, MatDialogModule, MatOptionModule, MatSelectModule, MatGridListModule, MatToolbarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { OccurenceListComponent } from './occurence-list/occurence-list.component';
import { OccurenceDetailsComponent } from './occurence-details/occurence-details.component';
import { OccurenceDeleteComponent } from './occurence-delete/occurence-delete.component';
import { OccurenceService } from './occurence.service';
import { OccurenceUpdateComponent } from './occurence-update/occurence-update.component';
const routes: Routes =[
  {path:'insert',component: OccurenceInsertComponent},
  {path:'details',component: OccurenceDetailsComponent},
  {path:'list',component: OccurenceListComponent},
  {path:'update',component: OccurenceUpdateComponent}
]
@NgModule({
  declarations: [OccurenceInsertComponent, OccurenceListComponent, OccurenceDetailsComponent, OccurenceDeleteComponent, OccurenceUpdateComponent],
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
  entryComponents:[OccurenceDeleteComponent],
  providers:[OccurenceService],
})
export class OccurenceModule { }
