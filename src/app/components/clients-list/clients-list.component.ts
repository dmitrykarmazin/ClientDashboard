import { getClients, getclientQuery } from './../../store/clients/reducer';
import { Client } from './../../model/Client';
import { Observable } from 'rxjs/Observable';
import { SearchService } from './../../services/search.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ClientsDataService } from '../../services/clients-data.service';
// tslint:disable-next-line:import-blacklist
import { Subscription } from 'rxjs';
import { Store, Action, select } from '@ngrx/store';
import * as fromRoot from '../../store/clients/reducer';
import * as seceltors from '../../store/clients/selectors';
import * as Actions from '../../store/clients/actions';
// import { AppState } from '../../store/clients/state';
import { State } from '../../model/ClientState';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientsListComponent implements OnInit {
  clients$: Observable<Client[]>;
  selected: Client;
  // clients: Client[] = [];
  private subscription: Subscription;
  temp$: Observable<string>;

  constructor(
    private ClientsService: ClientsDataService,
    private store: Store<State>
  ) {
    this.clients$ = this.store.pipe(select(seceltors.getClients));
    this.temp$ = this.store.pipe(select(seceltors.getQuery));
    // this.selected = store.select(state => state.selectedClient);
  }
  ngOnInit() {
    this.initData();
    // this.clients$
    // .store.pipe(select(fromRoot.getClients)).subscribe(i => console.log(i));
    // this.temp$ = this.store.select('fromRoot.getclientQuery')
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
