import { Client } from '../../model/Client';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-client-item',
  templateUrl: './client-item.component.html',
  styleUrls: ['./client-item.component.scss']
})
export class ClientItemComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  // tslint:disable-next-line:member-ordering
  @Input() client: Client;
}
