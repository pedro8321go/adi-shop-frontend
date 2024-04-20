import {Component, Input, OnInit} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-rating-star',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './rating-star.component.html',
  styles: ``
})
export class RatingStarComponent implements OnInit{

  @Input() votes: number = 0
  @Input() rating: number = 0.0


  activateStart: boolean[] = []


  ngOnInit() {
    if(this.rating === 0) {
      this.activateStart = [false, false, false, false, false]
    }
    for (let i = 0; i < 5; i++) {
      if(this.rating >= i+1){
        this.activateStart.push(true)
      } else {
        this.activateStart.push(false)
      }
    }
    console.log(this.rating)
    console.log(this.activateStart);
  }


}
