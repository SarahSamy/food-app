import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images: string[];
  constructor() {
    this.images = ["../../../../assets/images/slider/food-trays.jpg", "../../../../assets/images/slider/Masbia-Food.jpg", "../../../../assets/images/slider/nt.jpg"]
  }
  ngOnInit() {
  }

}
