import { Component, signal } from '@angular/core';
import { Activetab } from './questions/activetab/activetab';
import { DICEROLLER } from './questions/diceroller/diceroller';


@Component({
  selector: 'app-root',
  imports: [DICEROLLER],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practiseQuestions');
}
