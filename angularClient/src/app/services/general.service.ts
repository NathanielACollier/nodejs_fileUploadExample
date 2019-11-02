import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private baseUrl = "general/";

  constructor(private http: HttpClient) { }

  public getHello(): Promise<string>{
    return this.http.get<string>(this.baseUrl + "hello").toPromise();
  }
}
