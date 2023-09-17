import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from "rxjs";
import { catchError } from 'rxjs/operators';
import {Conversao} from "../model/conversao";

@Injectable({
  providedIn: 'root'
})
export class LandPageService {
  private url = 'http://localhost:3000/conversoes';

  constructor(private httpClient: HttpClient) { }

  getConversoes(): Observable<HttpResponse<Conversao[]>> {
    return this.httpClient
      .get<Conversao[]>(this.url, { observe: 'response' })
      .pipe(
        catchError(error => {
          let errorMsg: string;
          if (error.error instanceof ErrorEvent) {
            errorMsg = `Error: ${error.error.message}`;
          } else {
            errorMsg = this.getServerErrorMessage(error);
          }

          return throwError(errorMsg);
        })
      );
  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 404: {
        return `Not Found: ${error.message}`;
      }
      case 403: {
        return `Access Denied: ${error.message}`;
      }
      case 500: {
        return `Internal Server Error: ${error.message}`;
      }
      default: {
        return `Unknown Server Error: ${error.message}`;
      }

    }
  }
}
