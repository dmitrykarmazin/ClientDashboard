import { Injectable } from '@angular/core';
import { Action , Store } from '@ngrx/store';
import { Client } from '../../model/Client';

export const SEARCHCLIENT = 'Search Client';
export const SELECTCLIENT = 'Select Client';
export const FETCHCLIENTS = 'Fetch clients';

export class SearchClient implements Action {
  readonly type = SEARCHCLIENT;
  constructor (public payload: string) {}
}
export class SelectClient implements Action {
  readonly type = SELECTCLIENT;
  constructor(public payload: Client) {}
}
export class FetchClient implements Action {
  readonly type = FETCHCLIENTS;
  constructor(public payload: Client[]) {}
}
export type Actions = SearchClient | SelectClient | FetchClient;
