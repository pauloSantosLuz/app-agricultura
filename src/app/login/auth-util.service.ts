import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { isNullOrUndefined } from 'util';

 
@Injectable({
    providedIn:'root'
})
export class AuthUtilService {
  private currentTokenSubject: BehaviorSubject<string>;
  public currentToken: Observable<string>;
 
  constructor() {
    this.currentTokenSubject = new BehaviorSubject<string>(localStorage.getItem('token'));
    this.currentToken = this.currentTokenSubject.asObservable();
  }
 
  public get currentTokenValue(): string {
    return this.currentTokenSubject.value;
  }
 
  public set currentTokenValue(token: string) {
    this.currentTokenSubject.next(token);
  }
 
  public isLogged(): boolean {
    return !isNullOrUndefined(this.currentTokenSubject.value);
  }
 
  public logout() {
    localStorage.removeItem('token');
    this.currentTokenValue = null;
  }
}