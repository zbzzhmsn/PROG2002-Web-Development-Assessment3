import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from "./index/index.component";
import { SearchComponent } from "./search/search.component";
import { FundraiserComponent } from "./fundraiser/fundraiser.component";
import { DonationComponent } from "./donation/donation.component";
import { AdminComponent } from "./admin/admin.component";
import { FundraiserFormComponent } from "./fundraiser-form/fundraiser-form.component";

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'search', component: SearchComponent},
  {path: 'fundraiser/:id', component: FundraiserComponent},
  {path: 'donation/:fundraiserId', component: DonationComponent},
  {path: 'new-fundraiser', component: FundraiserFormComponent},
  {path: 'edit-fundraiser/:fundraiserId', component: FundraiserFormComponent},
  {path: 'admin', component: AdminComponent},
  {path: '*', component: IndexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
