import { Client } from '../../model/Client';
import { Subscription } from 'rxjs';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: "client-details",
  templateUrl: "./client-details.component.html",
  styleUrls: ["./client-details.component.scss"]
})
export class ClientDetailsComponent implements OnInit {
  private subscription: Subscription;
  client: Client = null;
  opened: boolean = false;

  constructor(private DataService: DataService) {}

  ngOnInit() {
    this.subscription = this.DataService.ClientData$.subscribe(c => {
      this.client = c;
      console.log(this.client);
      this.opened = this.client === {} ? false : true;  
      console.log(this.opened)
      //setTimeout(()=>this.opened=false,3000)
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}
