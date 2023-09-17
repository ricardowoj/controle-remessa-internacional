import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs";
import {Conversao} from "../model/conversao";

@Injectable({
  providedIn: 'root'
})
export class LandPageService {
  private url = 'http://localhost:3000/conversoes';

  constructor(private httpClient: HttpClient) { }

  getConversoes(): Observable<HttpResponse<Conversao[]>> {
    return this.httpClient.get<Conversao[]>(
      this.url, { observe: 'response' });
  }
}
