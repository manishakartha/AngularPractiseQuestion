import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diceroller',
  imports: [FormsModule,CommonModule],
  standalone:true,
  templateUrl: './diceroller.html',
  styleUrl: './diceroller.css'
})
export class DICEROLLER {
numberToRoll:number=0
values:number[]=[]
  getRandomNumber(){
     this.values = []; 
    for(let i =1;i<=this.numberToRoll;i++){
      // let randomNumber = Math.floor(Math.random()*this.numberToRoll);
      this.values.push( Math.floor(Math.random()*  6)+1)
    }
  }
}
