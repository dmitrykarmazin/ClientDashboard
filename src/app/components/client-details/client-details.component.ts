import { Client } from '../../model/Client';
// tslint:disable-next-line:import-blacklist
import { Subscription, Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, Action, select } from '@ngrx/store';
import * as fromRoot from '../../store/clients/reducer';
import * as selectors from '../../store/clients/selectors';
import { State } from '../../model/ClientState';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientDetailsComponent implements OnInit {
  clientOb$: Observable<Client>;

  constructor(private store: Store<State>) {
    this.clientOb$ = this.store.pipe(select(selectors.getSelectedClient));
  }
  ngOnInit() {
  }
}
