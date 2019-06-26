import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AuthUtilService } from '../login/auth-util.service';
import { MatDialog } from '@angular/material';
import { throwError, Observable } from 'rxjs';
import { Precipitation } from './precipitation.model';
import { getDefaultURL } from '../app.const';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrecipitationService {

  constructor(private http: HttpClient, private authUtil: AuthUtilService, private dialog: MatDialog) { }
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': this.authUtil.currentTokenValue,
      'Content-Type': 'application/json'
    });
  }

  public getOccurrencetype = (): Observable<Precipitation[]> => {
    return this.http
      .get<Precipitation[]>(
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

  public deleteOccurrencetype = (id: string): Observable<Precipitation[]> => {
    return this.http
      .delete<Precipitation[]>(
        getDefaultURL('occurrencetype/' + id),
        { headers: this.getHeaders() }
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      // return an observable with a user-facing error message
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }

}
