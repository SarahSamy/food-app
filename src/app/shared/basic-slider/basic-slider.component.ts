import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'basic-slider',
  templateUrl: './basic-slider.component.html',
  styleUrls: ['./basic-slider.component.scss']
})
export class BasicSliderComponent implements OnInit {
  images: string[];
  constructor() {
    this.images = ["../../../../assets/images/slider/food-trays.jpg", "../../../../assets/images/slider/Masbia-Food.jpg", "../../../../assets/images/slider/nt.jpg"]

  }

  ngOnInit() {
  }

}
