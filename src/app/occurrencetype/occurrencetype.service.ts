import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthUtilService } from '../login/auth-util.service';
import { Observable, throwError } from 'rxjs';
import { Occurrencetype } from './occurrencetype.model';
import { getDefaultURL } from '../app.const';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { ConfimDeleteDialogComponent } from './confim-delete-dialog/confim-delete-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class OccurrencetypeService {

  constructor(private http: HttpClient, private authUtil: AuthUtilService, private dialog: MatDialog) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': this.authUtil.currentTokenValue,
      'Content-Type': 'application/json'
    });
  }

  public getOccurrencetype = (): Observable<Occurrencetype[]> => {
    return this.http
      .get<Occurrencetype[]>(
        getDefaultURL('occurrencetype'),
        { headers: this.getHeaders() }
      )
      .pipe(catchError(this.handleError));
  }

  public putOccurrencetype(id: string, descricao: string) {
    const body = JSON.stringify({ id: id, description: descricao });
    return this.http
      .put(
        getDefaultURL('occurrencetype'),
        body,
        { headers: this.getHeaders() }
      )
      .pipe(catchError(this.handleError));
  }

  public postOccurrencetype(descricao: string) {
    const body = JSON.stringify({ description: descricao });
    return this.http
      .post(
        getDefaultURL('occurrencetype'),
        body,
        { headers: this.getHeaders() }
      )
      .pipe(catchError(this.handleError));
  }

  public deleteOccurrencetype = (id: string): Observable<Occurrencetype[]> => {
    return this.http
      .delete<Occurrencetype[]>(
        getDefaultURL('occurrencetype/' + id),
        { headers: this.getHeaders() }
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      alert("Occoreu um erro: "+ error.error.message);
      // return an observable with a user-facing error message
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
      switch(error.status){
        case 0:
            alert("Norma não respeitada");
            break;
        case 400:
            alert("Norma não respeitada");
            break;
        default:
            alert(`Backend returned code ${error.status}, ` + `body was: ${error.error}` + '\n Contate o administrador');
      }

    }
    return throwError('Something bad happened; please try again later.');
  }

  //abre o dialog para deletar uma ocorrencia
  openConfimDialog(name: string) {
    return this.dialog.open(ConfimDeleteDialogComponent, {
      width: '390px',
      panelClass: 'confim-dialog-container',
      disableClose: true,
      position: { top: "100px" },
      data: {
        message: name
      }
    });
  }




}