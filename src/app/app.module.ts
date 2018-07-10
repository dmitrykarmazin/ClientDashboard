import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

/*material*/
import { MatSidenavModule } from "@angular/material";
import { MatInputModule } from "@angular/material/input";

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [AppComponent, SearchComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, 
    MatSidenavModule, 
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
