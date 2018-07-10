import { ClientsDataService } from '../../services/clients-data.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../../model/Client';



@Component({
  selector: "clients-list",
  templateUrl: "./clients-list.component.html",
  styleUrls: ["./clients-list.component.scss"]
})
export class ClientsListComponent implements OnInit {
  clients: Client[];
  selected: Client;

  constructor(private ClientsService: ClientsDataService) {}

  ngOnInit() {
    this.getClient();
  }

  getClient(): void {
    this.ClientsService.getClientsData().subscribe(cl => {
      console.log(cl);
      this.clients = cl;
    });
  }
  selectedClient(data: Client){
    this.selected =  data;
  }

}
