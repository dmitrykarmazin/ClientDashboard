import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/clients/reducer';
import { FormControl } from '@angular/forms';
import { switchMap, debounceTime } from 'rxjs/operators';
import { map } from 'rxjs/operator/map';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/switch';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  // @ViewChild('input') query: ElementRef;

  query =  new FormControl('');
  constructor(
    private store: Store<fromRoot.State>,
    private QueryService: SearchService
  ) {}
  ngOnInit() {
    console.log(this.query);
    this.query.valueChanges
      .pipe(
        debounceTime(300),
        switchMap(() => this.QueryService.query(this.query.value)))
      .subscribe();
    // this.query.valueChanges
    // // .debounceTime(300)
    // .switch()
    // .map(t => console.log(t))
    // .switchMap(() => this.QueryService.query(this.query.value))
    // .subscribe();
  }
}


  // input$ = Observable.
  //           fromEvent(this.query.nativeElement, 'keyup').debounceTime(300)
  //           .distinctUntilChanged()
  //           .do(text => this.QueryService.query(this.query.nativeElement.value))
  //           .subscribe();
