import * as ClientActions from './actions';
import { State } from '../../model/ClientState';

const initialState: State = {
  clientQuery: '',
  selectedClient: {},
  clients: []
};

export function reducer(state = initialState, action: ClientActions.Actions): State {
         switch (action.type) {
           case ClientActions.SEARCHCLIENT: {
             return { ...state, clientQuery: action.payload };
           }
           case ClientActions.SELECTCLIENT: {
             return { ...state, selectedClient: action.payload };
           }
           case ClientActions.FETCHCLIENTS: {
             return { ...state, clients: action.payload };
           }
           default:
             return state;
         }
       }

export const getClients = (state: State) => state.clients;

export const getclientQuery = (state: State) => state.clientQuery;

export const getSelectedClient = (state: State) => state.selectedClient;

