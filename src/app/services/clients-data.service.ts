import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs/Observable";
import { Client } from "../model/Client";

@Injectable()
export class ClientsDataService {
  private Url: string = "../../assets/clients.json";
  constructor(private http: HttpClient) {}

  getClientsData(): Observable<Client[]> {
    return this.http.get<Client[]>("../assets/clients.json");
  }
}
