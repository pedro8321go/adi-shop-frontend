import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styles: ``
})
export class PaginationComponent {

  @Input() limit: number = 8;
  @Input() total: number = 0;

  @Output() offset = new EventEmitter<number>();

  start: number = 0;
  end: number = this.limit

  nextEvent() {
    this.start = this.start +  this.limit;
    if (this.start+this.limit > this.total) {
      this.end = this.total
    } else {
      this.end = this.start+this.limit
    }
    this.offset.emit(this.start)
  }

  prevEvent() {
    this.start = this.start -  this.limit;
    this.end = this.start+this.limit
    this.offset.emit(this.start)
  }

  homeEvent() {
    this.start = 0;
    this.end = this.limit
    this.offset.emit(this.start)
  }

}
