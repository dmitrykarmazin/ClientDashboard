import { Client } from '../../model/Client';
// tslint:disable-next-line:import-blacklist
import { Subscription, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import * as fromRoot from '../../store/clients/reducer';


@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
  private subscription: Subscription;
  client: Observable<Client>;
  opened = true;

  constructor(private store: Store<fromRoot.State>) {
    this.client = this.store.select(fromRoot.getSelectedClient);
  }
  ngOnInit() {
    // this.subscription = this.DataClientService.ClientData$.subscribe(c => {
    //   this.client = c;
    //   this.opened = this.client === {} ? false : true;
    // });
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    // tslint:disable-next-line:no-unused-expression
    // this.subscription.unsubscribe; }
  }
}
