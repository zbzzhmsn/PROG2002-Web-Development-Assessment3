import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppService} from "../app.service";

@Component({
  selector: 'app-fundraiser',
  templateUrl: './fundraiser.component.html',
  styleUrl: './fundraiser.component.css'
})
export class FundraiserComponent {
  fundraiser: any = null
  donations: any = []

  constructor(private route: ActivatedRoute, private appService: AppService) {
    this.route.params.subscribe(res => {
      if (res['id']) {
        this.appService.getFundraisersById(res['id']).subscribe(response => {
          if (response.length > 0) {
            this.fundraiser = response[0]
          }
        })

        this.appService.getDonations(res['id']).subscribe(response => {
          this.donations = response
        })
      }
    })
  }
}
