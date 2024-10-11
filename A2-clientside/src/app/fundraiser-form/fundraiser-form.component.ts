import { Component } from '@angular/core';
import {AppService} from "../app.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-fundraiser-form',
  templateUrl: './fundraiser-form.component.html',
  styleUrl: './fundraiser-form.component.css'
})
export class FundraiserFormComponent {

  organizer = ""
  caption = ""
  targetFunding = ""
  currentFunding = ""
  city = ""
  active = "0"
  category = ""

  fundraiser: any = null

  categories: any = []

  constructor(private appService: AppService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(res => {
      if (res['fundraiserId']) {
        this.appService.getFundraisersById(res['fundraiserId']).subscribe(response => {
          if (response.length > 0) {
            this.fundraiser = response[0]
            this.organizer = this.fundraiser!.ORGANIZER
            this.caption = this.fundraiser!.CAPTION
            this.targetFunding = "" + this.fundraiser!.TARGET_FUNDING
            this.currentFunding = "" + this.fundraiser!.CURRENT_FUNDING
            this.city = this.fundraiser!.CITY
            this.active = "" + this.fundraiser!.ACTIVE
            this.category = "" + this.fundraiser!.CATEGORY_ID
          }
        })
      }
    })
  }

  ngOnInit() {
    this.appService.getCategories().subscribe(response => {
      this.categories = response
    })
  }

  createFundraiser() {
    if (this.organizer && this.caption && this.targetFunding && this.currentFunding && this.city && this.category) {
      if (!this.fundraiser) {
        this.appService.createFundraiser(this.organizer, this.caption, Number(this.targetFunding),
          Number(this.currentFunding), this.city, Number(this.active), Number(this.category))
          .subscribe(response => {
            alert("Created!")
            this.router.navigateByUrl("/admin")
          })
      } else {
        this.appService.editFundraiser(this.organizer, this.caption, Number(this.targetFunding),
          Number(this.currentFunding), this.city, Number(this.active), Number(this.category), this.fundraiser.FUNDRAISER_ID)
          .subscribe(response => {
            alert("Edited!")
            this.router.navigateByUrl("/admin")
          })
      }

    } else {
      alert("You should fill all fields.")
    }
  }
}
