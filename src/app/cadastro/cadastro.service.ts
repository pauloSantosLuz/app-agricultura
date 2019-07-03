import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { getDefaultURL } from '../app.const';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'text/plain'
    });
  }

  public cadastro = (name: string, mail: string, phone: string, senha: string, country: number, phoneCode: number): Observable<string> => {
    const body = JSON.stringify({name: name, mail: mail, phone: phone, senha: senha, country: "{id:1},", phoneCode: "{id:1},"});

    return this.http
      .post<string>(
        getDefaultURL('person'),
        body,
        { headers: this.getHeaders(), responseType: 'text' as 'json' }
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
      if(error.status==400){
        alert("Usuário já cadastrado");
      }else{
        alert(`Backend returned code ${error.status}, ` + `body was: ${error.error}` + '\n Contate o administrador');
      }

    }
    
    return throwError('Something bad happened; please try again later.');
  }

}
