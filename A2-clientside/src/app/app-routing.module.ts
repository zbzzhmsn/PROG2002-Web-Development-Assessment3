import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {SearchComponent} from "./search/search.component";
import {FundraiserComponent} from "./fundraiser/fundraiser.component";
import {DonationComponent} from "./donation/donation.component";

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'search', component: SearchComponent},
  {path: 'fundraiser/:id', component: FundraiserComponent},
  {path: 'donation/:fundraiserId', component: DonationComponent},
  {path: '*', component: IndexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
