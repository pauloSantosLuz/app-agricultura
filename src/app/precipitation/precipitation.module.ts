import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrecipitationInsertComponent } from './precipitation-insert/precipitation-insert.component';
import { MatTableModule, MatIconModule, MatButtonModule, MatSortModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatDialogModule, MatCardModule, MatDatepickerModule, MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { PrecipitationListComponent } from './precipitation-list/precipitation-list.component';
import { PrecipitationUpdateComponent } from './precipitation-update/precipitation-update.component';
import { PrecipitationDeleteComponent } from './precipitation-delete/precipitation-delete.component';
import { PrecipitationService } from './precipitation.service';
const routes: Routes =[
  {path:'list',component: PrecipitationListComponent},
  {path:'insert',component: PrecipitationInsertComponent},
  {path:'update',component: PrecipitationUpdateComponent}
]
@NgModule({
  declarations: [PrecipitationInsertComponent, PrecipitationListComponent, PrecipitationUpdateComponent, PrecipitationDeleteComponent],
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
    RouterModule.forChild(routes)  ],
    entryComponents:[PrecipitationDeleteComponent],
    providers:[PrecipitationService]
})
export class PrecipitationModule { }
