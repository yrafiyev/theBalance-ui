import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DataComponent } from './content/data/data.component';
import { ChartsComponent } from './content/charts/charts.component';
import { ContentComponent } from './content/content.component';
import {ServerService} from './content/server.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataComponent,
    ChartsComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
