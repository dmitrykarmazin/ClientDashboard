import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor(private QueryService: SearchService) {
  }
  ngOnInit() { }
}
