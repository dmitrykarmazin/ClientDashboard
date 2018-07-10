import { Observable } from 'rxjs/Observable';
import { Client } from '../model/Client';
import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class DataService {
  private ClientData: BehaviorSubject<Client> = new BehaviorSubject<Client>({});
  ClientData$: Observable<Client> = this.ClientData.asObservable();

  constructor() {}

  sentDetails(client: Client) {
    this.ClientData.next(client);
  }
}
