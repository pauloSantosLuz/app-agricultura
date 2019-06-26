import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatCardModule, MatInputModule, MatSpinner, MatProgressSpinnerModule, MatProgressBarModule, MatTooltipModule, MatDialogModule, MatNativeDateModule, MatOptionModule, MatSelect, MatSelectModule, MatGridListModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatMenuModule } from '@angular/material/menu';
import { LoginComponent } from './login/login.component';
import { DefaultComponent } from './default/default.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';
import { CadastroComponent } from './cadastro/cadastro.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DefaultComponent,
    CadastroComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatDialogModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatGridListModule,
    MatProgressSpinnerModule
    

  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
