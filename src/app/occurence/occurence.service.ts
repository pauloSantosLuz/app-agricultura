import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthUtilService } from '../login/auth-util.service';
import { MatDialog } from '@angular/material';

import { Observable, throwError } from 'rxjs';
import { getDefaultURL } from '../app.const';
import { catchError } from 'rxjs/operators';
import { Occurrencetype } from './occurrencetype.model';
import { Occurrence } from './occurrence.model';
import { OccurenceDeleteComponent } from './occurence-delete/occurence-delete.component';
import { Occurrencelocation } from './occurrencelocation.model';

@Injectable({
  providedIn: 'root'
})
export class OccurenceService {

  constructor(private http: HttpClient, private authUtil: AuthUtilService, private dialog: MatDialog) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': this.authUtil.currentTokenValue,
      'Content-Type': 'application/json'
    });
  }

  public getOccutenceTypeAll = (): Observable<Occurrencetype[]> => {

    return this.http
      .get<Occurrencetype[]>(
        getDefaultURL('occurrencetype/all'),
        { headers: this.getHeaders() }
      )
      .pipe(catchError(this.handleError));
  }
  public getOccutenceType = (id:number): Observable<Occurrencetype> => {

    return this.http
      .get<Occurrencetype>(
        getDefaultURL('occurrencetype/'+id),
        { headers: this.getHeaders() }
      )
      .pipe(catchError(this.handleError));
  }

  public getOccurrenceLocation = (id:number): Observable<Occurrencelocation[]> => {

    return this.http
      .get<Occurrencelocation[]>(
        getDefaultURL('occurrence/'+id+'/location'),
        { headers: this.getHeaders() }
      )
      .pipe(catchError(this.handleError));
  }
  public getOccurenceByArea = (id: number): Observable<Occurrence[]> => {

    return this.http
      .get<Occurrence[]>(
        getDefaultURL('occurrence/area/' + id),
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

  public putOccurenceLocation(id: number,geometry: string,observation:string, occurrence: number) {
    const body = JSON.stringify({
      id:id,
      geometry: geometry,
      observation: observation,
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

  public putOccurrence(id: number,descricao: string, occurrencetype: number, area: number){
    const body = JSON.stringify({
      id: id,
      description: descricao, permanent: "não",
      occurrenceType: {
        id: occurrencetype
      },
      area: {
        id: area
      }

    });

    return this.http
      .put(
        getDefaultURL('occurrence'),
        body,
        { headers: this.getHeaders() }
      )
      .pipe(catchError(this.handleError));
  }
  public insertOcccurrence(descricao: string, occurrencetype: number, area: number) {

    const body = JSON.stringify({
      description: descricao, permanent: "não",
      occurrenceType: {
        id: occurrencetype
      },
      area: {
        id: area
      }

    });

    return this.http
      .post(
        getDefaultURL('occurrence'),
        body,
        { headers: this.getHeaders() }
      )
      .pipe(catchError(this.handleError));
  }
  public deleteOccurrence = (id: string): Observable<Occurrence[]> =>{
    return this.http
      .delete<Occurrence[]>(
        getDefaultURL('occurrence/' + id),
        { headers: this.getHeaders() }
      )
      .pipe(catchError(this.handleError));
  }
  
  public deleteOccurrenceLocation = (id: string): Observable<Occurrence[]> =>{
    return this.http
      .delete<Occurrence[]>(
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

  //abre o dialog para deletar uma ocorrencia
  openConfimDialog(name: string) {
    return this.dialog.open(OccurenceDeleteComponent, {
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
