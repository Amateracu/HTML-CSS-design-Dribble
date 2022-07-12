import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlvianComponent } from './alvian/alvian.component';

import { AppComponent } from './app.component';
import { TaskiiComponent } from './taskii/taskii.component';

@NgModule({
  declarations: [AppComponent, AlvianComponent, TaskiiComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
