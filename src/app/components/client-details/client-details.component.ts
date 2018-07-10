import { Client } from '../../model/Client';
// tslint:disable-next-line:import-blacklist
import { Subscription } from 'rxjs';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
  private subscription: Subscription;
  client: Client = {};
  opened = false;

  constructor(private DataClientService: DataService) {}

  ngOnInit() {
    this.subscription = this.DataClientService.ClientData$.subscribe(c => {
      this.client = c;
      this.opened = this.client === {} ? false : true;
    });
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    // tslint:disable-next-line:no-unused-expression
    this.subscription.unsubscribe; }
}
