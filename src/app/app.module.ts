import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

/*material*/
import { MatSidenavModule } from "@angular/material";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card"

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { ClientItemComponent } from './components/client-item/client-item.component';

import { ClientsDataService } from './services/clients-data.service';
import { DataService } from './services/data.service';
import { SearchService } from './services/search.service';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ClientsListComponent,
    ClientItemComponent,
    ClientDetailsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatInputModule,
    MatListModule,
    MatCardModule
  ],
  providers: [ClientsDataService, DataService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule {}
