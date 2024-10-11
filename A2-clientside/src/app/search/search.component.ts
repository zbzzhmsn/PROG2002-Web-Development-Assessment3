import { Component } from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  categories: any = []
  fundraisers: any = []
  organizer = ""
  city = ""
  category = ""
  active = ""

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.getCategories().subscribe(response => {
      this.categories = response
    })
  }

  searchFundraisers() {
    console.log(this.category)
    if (!this.organizer && !this.city && !this.category && this.active === "") {
      alert("You must enter at least one search criteria.");
      return;
    }
    this.appService.searchFundraisers(this.organizer, this.city, this.category, Number(this.active)).subscribe(response => {
      this.fundraisers = response
    })
  }

  reset() {
    this.organizer = ""
    this.city = ""
    this.category = ""
    this.fundraisers = []
  }
}
