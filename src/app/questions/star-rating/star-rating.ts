import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  imports: [CommonModule],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.css'
})
export class StarRating {
@Input() maxstars: number = 5;
@Input() selectedStar: number = 0;
 @Output() ratingSelected = new EventEmitter<number>();
arrayofStars: number[] = Array.from({ length: this.maxstars }, (_, i) => i + 1);
  hoveredStars: number = 0;
  isHovering: boolean = false;

selectedStars(index: number): void {
  this.selectedStar = index + 1;
   this.ratingSelected.emit(this.selectedStar);
}

  onMouseEnter(index: number): void {
    this.hoveredStars = index + 1;
    this.isHovering = true;
  }

  onMouseLeave(): void {
    this.isHovering = false;
  }
  isFilled(index: number): boolean {
    return this.isHovering
      ? index < this.hoveredStars
      : index < this.selectedStar;
  }
}
