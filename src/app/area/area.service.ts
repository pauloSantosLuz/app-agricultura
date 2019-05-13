import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { getDefaultURL } from '../app.const';
import { AuthUtilService } from '../login/auth-util.service';
import { Area } from './area.model';
import { Solo } from './solo.model';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private http: HttpClient, private authUtil: AuthUtilService) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': this.authUtil.currentTokenValue,
      'Accept': 'application/json'
    });
  }

  public getArea = (id:string): Observable<Area> => {
    return this.http
    .get<Area>(
      getDefaultURL('area/'+id),
      { headers: this.getHeaders()}
    )
    .pipe(catchError(this.handleError));
      
  }
  

  public getSolo = (id:string): Observable<Solo> => {
    return this.http
    .get<Solo>(
      getDefaultURL('soil/'+id),
      { headers: this.getHeaders()}
    )
    .pipe(catchError(this.handleError));
      
  }
  public getAreas = (): Observable<Area[]> => {
    return this.http
    .get<Area[]>(
      getDefaultURL('area'),
      { headers: this.getHeaders()}
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
