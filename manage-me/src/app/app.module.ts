import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { MatSortModule, MatTableModule } from '@angular/material';
import { ProjectsListComponent } from './module/home/projects-list/projects-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    MatSortModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
