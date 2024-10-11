import { Component } from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  fundraisers: any = []

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.getFundraisersAll().subscribe(response => {
      this.fundraisers = response
    })
  }

  deleteFundraiser(fundraiser: any) {
    if (confirm("Do you really want to delete the fundraiser?")) {
      this.appService.deleteFundraiser(fundraiser.FUNDRAISER_ID).subscribe(() => {
        alert("Deleted!")
        this.appService.getFundraisersAll().subscribe(response => {
          this.fundraisers = response
        })
      })
    }
  }
}
