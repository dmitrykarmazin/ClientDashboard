import { Observable } from 'rxjs/Observable';
// tslint:disable-next-line:import-blacklist
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()
export class SearchService {
  private searchQuary: BehaviorSubject<string> = new BehaviorSubject('');
  searchQuary$: Observable<string> = this.searchQuary.asObservable();

  constructor() {}

  query(QueryText: string): void {
    this.searchQuary.next(QueryText);
  }
}
