import { Component, OnInit } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { SearchService } from '../../services/search.service';


@Component({
  selector: "search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  constructor(private SearchService: SearchService) {
  }
  ngOnInit() {
  }
  serach(){
    this.SearchService.query
  }
}
