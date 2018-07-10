import { SearchService } from './../../services/search.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../../model/Client';

import { DataService } from './../../services/data.service';
import { ClientsDataService } from '../../services/clients-data.service';
import { Subscription } from 'rxjs';


@Component({
  selector: "clients-list",
  templateUrl: "./clients-list.component.html",
  styleUrls: ["./clients-list.component.scss"]
})
export class ClientsListComponent implements OnInit {
  clients: Client[];
  selected: Client;
  private subscription: Subscription;
  temp:string;

  constructor(private client:DataService, private ClientsService: ClientsDataService,
    private SearchService: SearchService) {
  }

  ngOnInit() {
    this.getClient();
    this.subscription = this.SearchService.searchQuary$
        .debounceTime(300)
        .distinctUntilChanged()
        .subscribe(query=>{
          console.log(query);
          this.temp = query;
        })
  }

  getClient(): void {
    this.ClientsService.getClientsData().subscribe(cl => {
      console.log(cl);
      this.clients = cl;
    });
  }

  selectedClient(data: Client):void{
    this.selected = data;
    console.table(data);
    this.client.sentDetails(data);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();  
  }

}
