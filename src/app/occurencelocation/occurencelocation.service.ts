import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthUtilService } from '../login/auth-util.service';
import { MatDialog } from '@angular/material';
import { Observable, throwError } from 'rxjs';
import { Occurrencelocation } from '../occurence/occurrencelocation.model';
import { getDefaultURL } from '../app.const';
import { catchError } from 'rxjs/operators';
import { OccurencelocationDeleteComponent } from './occurencelocation-delete/occurencelocation-delete.component';

@Injectable({
  providedIn: 'root'
})
export class OccurencelocationService {

  constructor(private http: HttpClient, private authUtil: AuthUtilService, private dialog: MatDialog) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': this.authUtil.currentTokenValue,
      'Content-Type': 'application/json'
    });
  }
  public getOccurrenceLocation = (id: number): Observable<Occurrencelocation[]> => {

    return this.http
      .get<Occurrencelocation[]>(
        getDefaultURL('occurrence/' + id + '/location'),
        { headers: this.getHeaders() }
      )
      .pipe(catchError(this.handleError));
  }
  public postOccurenceLocation(geometry: string,observation:string, id: number) {
    const body = JSON.stringify({
      geometry: geometry,
      description: observation,
      value: 2,
      occurrence: {
        id: id
      }
    });

    return this.http
      .post(
        getDefaultURL('occurrence/location'),
        body,
        { headers: this.getHeaders() }
      )
      .pipe(catchError(this.handleError));
  }
  public putOccurenceLocation(id: number, geometry: string, observation: string, occurrence: number) {
    const body = JSON.stringify({
      id: id,
      geometry: geometry,
      description: observation,
      value: 2,
      occurrence: {
        id: occurrence
      }
    });
  
    return this.http
      .put(
        getDefaultURL('occurrence/location'),
        body,
        { headers: this.getHeaders() }
      )
      .pipe(catchError(this.handleError));
  }

  public deleteOccurrenceLocation = (id: string): Observable<Occurrencelocation[]> => {
    return this.http
      .delete<Occurrencelocation[]>(
        getDefaultURL('occurrence/location/' + id),
        { headers: this.getHeaders() }
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred: ', error.error.message);
      alert("Occoreu um erro: " + error.error.message);
      // return an observable with a user-facing error message
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);

      if (error.status == 400 || error.status == 0) {
        alert("Norma não respeitada");
      } else {
        alert(`Backend returned code ${error.status}, ` + `body was: ${error.error}` + '\n Contate o administrador');
      }
    }
    return throwError('Something bad happened; please try again later.');
  }

  // abre o dialog para deletar uma ocorrencia
  openConfimDialog(name: string) {
    return this.dialog.open(OccurencelocationDeleteComponent, {
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
