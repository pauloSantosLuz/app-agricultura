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
    return throwError('Something bad happened; please try again later.');
  }

}
