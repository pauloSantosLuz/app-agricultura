import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DefaultComponent } from './default/default.component';
import { AuthGuard } from './login/auth.guard';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  { path: '', component: DefaultComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'precipitation',loadChildren: './precipitation/precipitation.module#PrecipitationModule', canActivate:[AuthGuard] },
  { path: 'occurrencetype', loadChildren: './occurrencetype/occurrencetype.module#OccurrencetypeModule', canActivate:[AuthGuard] },
  {path: 'area', loadChildren: './area/area.module#AreaModule', canActivate:[AuthGuard] },
  {path: 'occurrence', loadChildren: './occurence/occurence.module#OccurenceModule', canActivate:[AuthGuard] },
  {path: 'occurrencelocation', loadChildren: './occurencelocation/occurencelocation.module#OccurencelocationModule', canActivate:[AuthGuard] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
