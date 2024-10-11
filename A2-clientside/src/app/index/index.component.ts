import {Component, OnInit} from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  fundraisers: any = []

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.getFundraisers().subscribe(response => {
      this.fundraisers = response
    })
  }
}
