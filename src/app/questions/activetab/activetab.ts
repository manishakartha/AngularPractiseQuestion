import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-activetab',
  imports: [CommonModule],
  templateUrl: './activetab.html',
  styleUrl: './activetab.css'
})
export class Activetab {
  clickedValue:number =0


  buttonClicked(value:number){
    this.clickedValue=value
  }
}
