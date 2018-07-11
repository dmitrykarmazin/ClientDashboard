import { Client } from './Client';

export interface State {
  clientQuery: string;
  selectedClient: Client;
  clients: Client[];
}
