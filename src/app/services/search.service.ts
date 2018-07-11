import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../store/clients/reducer';
import * as Actions from '../store/clients/actions';
import { State } from '../model/ClientState';

@Injectable()
export class SearchService {
  constructor(private store: Store<State>) {}

  query(QueryText$: Observable<string>): Observable<string> {
    return QueryText$.do(text =>
      this.store.dispatch(new Actions.SearchClient(text))
    );
  }
}
