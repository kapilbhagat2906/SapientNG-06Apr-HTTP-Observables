import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { ToDoFormComponent } from './components/to-do-form/to-do-form.component';
import { ToDoComponent } from './components/to-do-form/to-do/to-do.component';
import { ToDoListComponent } from './components/to-do-form/to-do-list/to-do-list.component';
import {FormsModule} from '@angular/forms';
import { ToDoService } from './services/to-do.service';

@NgModule({
  declarations: [
    AppComponent,
    ToDoFormComponent,
    ToDoComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpErrorHandler,
    MessageService,
    ToDoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
