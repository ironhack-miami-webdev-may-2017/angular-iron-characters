import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
//Added HttpModule for HTTP requests within Angular, must be imported below also

import { AppComponent } from './app.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharactersFormsComponent } from './characters-forms/characters-forms.component';
import { ApiService } from './services/api.service'  //import service


@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    CharactersFormsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule // <!-- Angular's HTTP module
  ],

  //this allows the Api Service to be
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
