import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DefaultComponent } from './default/default.component';
import { AuthGuard } from './login/auth.guard';

const routes: Routes = [
  { path: '', component: DefaultComponent },
  { path: 'login', component: LoginComponent },
  { path: 'occurrencetype', loadChildren: './occurrencetype/occurrencetype.module#OccurrencetypeModule', canActivate:[AuthGuard] },
  {path: 'area', loadChildren: './area/area.module#AreaModule', canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
