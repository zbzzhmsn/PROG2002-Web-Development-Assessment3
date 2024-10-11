import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { SearchComponent } from './search/search.component';
import { FundraiserComponent } from './fundraiser/fundraiser.component';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {DonationComponent} from "./donation/donation.component";
import {AdminComponent} from "./admin/admin.component";
import {FundraiserFormComponent} from "./fundraiser-form/fundraiser-form.component";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SearchComponent,
    FundraiserComponent,
    DonationComponent,
    AdminComponent,
    FundraiserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
