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

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.getCategories().subscribe(response => {
      this.categories = response
    })
  }

  searchFundraisers() {
    console.log(this.category)
    if (!this.organizer && !this.city && !this.category) {
      alert("You must enter at least one search criteria.");
      return;
    }
    this.appService.searchFundraisers(this.organizer, this.city, this.category).subscribe(response => {
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
