import { Component } from '@angular/core';
import {AppService} from "../app.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrl: './donation.component.css'
})
export class DonationComponent {
  fundraiser: any = null
  giver = ""
  amount = 5

  constructor(private route: ActivatedRoute, private appService: AppService) {
    this.route.params.subscribe(res => {
      if (res['fundraiserId']) {
        this.appService.getFundraisersById(res['fundraiserId']).subscribe(response => {
          if (response.length > 0) {
            this.fundraiser = response[0]
          }
        })
      }
    })
  }

  donate() {
    if (!this.giver) {
      alert("You should enter giver name!")
      return
    }
    if (!this.amount || isNaN(this.amount) || this.amount < 5) {
      alert("You should enter correct amount, minimum of donation is 5 AUD.")
      return
    }
    this.appService.createDonations(this.giver, this.amount, this.fundraiser.FUNDRAISER_ID).subscribe(response => {
      alert("Thank you for your donation to " + this.fundraiser.CAPTION)
      this.giver = ""
      this.amount = 5
    })
  }
}
