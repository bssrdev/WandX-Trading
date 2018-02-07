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

import { Tokentrade } from './tokentrade';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable()
export class TokentradeService {

  constructor(
  	private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('TokentradeService');
  	}

	TokentradeUrl = 'http://localhost:3000/api/tokentrades';
  	TokentradesUrl = 'http://localhost:3000/api/tokentrade';
  	private handleError: HandleError;

  	//Getting the token details from the server : GET from Server

  	getTokens(): Observable<Tokentrade[]>{
  		return this.http.get<Tokentrade[]>(this.TokentradeUrl)
  			.pipe(
  				catchError(this.handleError('getTokens',[]))
  				);
  	}

  	//Adding the token to database : POST to database

  addToken (token:Tokentrade): Observable<Tokentrade> {
    // var body={
    //   tokenname: token.tokenname,
    //   tokensymbol: token.tokensymbol,
    //   decimals: token.decimals,
    //   totalsupply: token.totalsupply,
    //   tokenadvisorvesting: token.tokenadvisorvesting,
    //   tokenteamvesting: token.tokenteamvesting
    // }
  	return this.http.post<Tokentrade>(this.TokentradesUrl, token, httpOptions)
  		.pipe(
  			catchError(this.handleError('addToken',token))
  			);
  }

  //Update token on the server : PUT the token on the server

  updateToken (token:Tokentrade): Observable<Tokentrade> {
  	httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<Tokentrade>(this.TokentradeUrl, token, httpOptions)
      .pipe(
        catchError(this.handleError('updateToken', token))
      );
  }

  //Editing the Token
  // editToken(token:Tokentrade): Observable<Tokentrade> {
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
  //   return this.http.put<Tokentrade>(this.TokentradeUrl +'/'+ token._id, body, httpOptions)
  // }

  // Deleting the token from database

  deleteToken(_id:any): Observable<{}> {
    const url = `${this.TokentradesUrl}/${_id}`;
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
