import { SearchService } from './../../services/search.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../../model/Client';

import { DataService } from './../../services/data.service';
import { ClientsDataService } from '../../services/clients-data.service';
// tslint:disable-next-line:import-blacklist
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {
  clients: Client[] = [];
  selected: Client;
  private subscription: Subscription;
  temp: string;

  constructor(private ClientService: DataService, private ClientsService: ClientsDataService,
    private SearchIService: SearchService) {
  }

  ngOnInit() {
    this.getClient();
    this.subscription = this.SearchIService.searchQuary$
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe(query => {
        this.temp = query;
      });
  }

  getClient(): void {
    this.ClientsService.getClientsData().subscribe(cl => {
      this.clients = cl;
    });
  }

  selectedClient(data: Client): void {
    this.selected = data;
    console.table(data);
    this.ClientService.sentDetails(data);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.subscription.unsubscribe(); }

}
