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

  public getPrecipitation = (): Observable<Precipitation[]> => {
    return this.http
      .get<Precipitation[]>(
        getDefaultURL('precipitation'),
        { headers: this.getHeaders() }
      )
      .pipe(catchError(this.handleError));
  }

  public putPrecipitation(
    observation: string,
    collectionType: string,
    volume: string,
    startDate: string,
    endDate: string,
    id: string
    ) {
    const body = JSON.stringify({
       observation: observation,
       collectionType: collectionType,
       volume: volume,
       startDate: startDate,
       endDate: endDate,
       area: {id:id}
   });
    return this.http
      .put(
        getDefaultURL('precipitation'),
        body,
        { headers: this.getHeaders() }
      )
      .pipe(catchError(this.handleError));
  }

  public postPrecipitation(
    observation: string,
    collectionType: string,
    volume: string,
    startDate: string,
    endDate: string,
    id: string

  ) {
    const body = JSON.stringify({
      observation: observation,
      collectionType: collectionType,
      volume: volume,
      startDate: startDate,
      endDate: endDate,
      area: {id:id}
      });
      console.log(body);
    return this.http
      .post(
        getDefaultURL('precipitation'),
        body,
        { headers: this.getHeaders() }
      )
      .pipe(catchError(this.handleError));
  }

  public deletePrecipitation = (id: string): Observable<Precipitation[]> => {
    return this.http
      .delete<Precipitation[]>(
        getDefaultURL('precipitation/' + id),
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
