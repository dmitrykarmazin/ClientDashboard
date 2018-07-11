import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from './reducer';
import { State } from '../../model/ClientState';

export const getClientState = createFeatureSelector<State>('client');

export const getQuery = createSelector(getClientState, fromRoot.getclientQuery);
export const getClients = createSelector(getClientState, fromRoot.getClients);
export const getSelectedClient = createSelector(getClientState, fromRoot.getSelectedClient);


