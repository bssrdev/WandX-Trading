import { Injectable } from '@angular/core';

//Http imports
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/map';

import { Createtoken } from './createtoken';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable()
export class CreatetokenService {

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('CreatetokenService');
  }

  CreatetokenUrl = 'http://localhost:3000/api/createtokens';
  CreatetokensUrl = 'http://localhost:3000/api/createtoken';
  private handleError: HandleError;



  //Getting the token details from the server : GET from Server

  getTokens(): Observable<Createtoken[]>{
  	return this.http.get<Createtoken[]>(this.CreatetokenUrl)
  		.pipe(
  			catchError(this.handleError('getTokens',[]))
  			);
  }

  //Adding the token to database : POST to database

  addToken (token:Createtoken): Observable<Createtoken> {
    // var body={
    //   tokenname: token.tokenname,
    //   tokensymbol: token.tokensymbol,
    //   decimals: token.decimals,
    //   totalsupply: token.totalsupply,
    //   tokenadvisorvesting: token.tokenadvisorvesting,
    //   tokenteamvesting: token.tokenteamvesting
    // }
  	return this.http.post<Createtoken>(this.CreatetokenUrl, token, httpOptions)
  		.pipe(
  			catchError(this.handleError('addToken',token))
  			);
  }

  //Update token on the server : PUT the token on the server

  updateToken (token:Createtoken): Observable<Createtoken> {
  	httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<Createtoken>(this.CreatetokenUrl, token, httpOptions)
      .pipe(
        catchError(this.handleError('updateToken', token))
      );
  }

  //Editing the Token
  editToken(token:Createtoken): Observable<Createtoken> {
    const params = new HttpParams().set('ID', token._id);
    var body={
      tokenname: token.tokenname,
      tokensymbol: token.tokensymbol,
      decimals: token.decimals,
      totalsupply: token.totalsupply,
      tokenadvisorvesting: token.tokenadvisorvesting,
      tokenteamvesting: token.tokenteamvesting,
      ID: token._id
    }
    return this.http.put<Createtoken>(this.CreatetokenUrl +'/'+ token._id, body, httpOptions)
  }

  //Deleting Token
  // deleteToken(token:Createtoken): Observable<Createtoken> {
  //   const params = new HttpParams().set('ID', token._id);
  //   var body={
  //     tokenname: token.tokenname,
  //     tokensymbol: token.tokensymbol,
  //     decimals: token.decimals,
  //     totalsupply: token.totalsupply,
  //     tokenadvisorvesting: token.tokenadvisorvesting,
  //     tokenteamvesting: token.tokenteamvesting,
  //     ID: token._id
  //   }
  //   return this.http.delete<Createtoken>(this.CreatetokensUrl +'/'+ token._id)
  // }

  deleteToken(_id:any): Observable<{}> {
    const url = `${this.CreatetokensUrl}/${_id}`;
    //const params = new HttpParams().set('ID', token._id);
    // var body={
    //   tokenname: token.tokenname,
    //   tokensymbol: token.tokensymbol,
    //   decimals: token.decimals,
    //   totalsupply: token.totalsupply,
    //   tokenadvisorvesting: token.tokenadvisorvesting,
    //   tokenteamvesting: token.tokenteamvesting,
    //   ID: token._id
    // }
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteToken'))
      );
  }

}
