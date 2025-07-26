import { Component, signal } from '@angular/core';

import { StarRating } from './questions/star-rating/star-rating';


@Component({
  selector: 'app-root',
  imports: [StarRating],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practiseQuestions');

  onRatingSelected1(rating: number) {
  console.log('Widget 1 selected:', rating);
}
  
}
