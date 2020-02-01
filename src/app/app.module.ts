import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BranchAComponent } from './branch-a/branch-a.component';
import { BranchBComponent } from './branch-b/branch-b.component';

@NgModule({
  declarations: [
    AppComponent,
    BranchAComponent,
    BranchBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
