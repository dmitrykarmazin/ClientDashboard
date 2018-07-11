import * as Actions from '../../store/clients/actions';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/clients/reducer';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { State } from '../../model/ClientState';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchField: FormControl;

  constructor(
    private store: Store<State>
  ) {}
  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe(i => this.store.dispatch(new Actions.SearchClient(i)));
  }
}


