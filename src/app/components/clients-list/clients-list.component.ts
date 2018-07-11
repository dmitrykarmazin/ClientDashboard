import { Client } from './../../model/Client';
import { Observable } from 'rxjs/Observable';
import { SearchService } from './../../services/search.service';
import { Component, OnInit } from '@angular/core';

import { ClientsDataService } from '../../services/clients-data.service';
// tslint:disable-next-line:import-blacklist
import { Subscription } from 'rxjs';
import { Store, Action, State } from '@ngrx/store';
import * as fromRoot from '../../store/clients/reducer';
import * as Actions from '../../store/clients/actions';


@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {
  clientsOb$: Observable<Client[]>;
  selected: Client;
  clients: Client[] = [];
  private subscription: Subscription;
  temp$: Observable<string>;

  constructor(
    private ClientsService: ClientsDataService,
    private SearchIService: SearchService,
    private store: Store<fromRoot.State>
  ) {
    this.clientsOb$ = this.store.select(fromRoot.getClients);
    this.temp$ = this.store.select(fromRoot.getclientQuery);
    // this.selected = store.select(state => state.selectedClient);
  }
  ngOnInit() {
    this.initData();
      this.clientsOb$.subscribe(data => {
        this.clients = data;
        console.log(this.clients, data);
      });
    // console.log(this.clients);
  }

  selectedClient(data: Client): void {
    this.selected = data;
    console.table(data);
    this.store.dispatch(new Actions.SelectClient(data));
  }

  initData(): void {
    this.ClientsService.getClientsData().subscribe(data => {
      console.log(data);
      this.store.dispatch(new Actions.FetchClient(data));
    });
  }
}
