import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {

  length = 100;
  randomArray = Array(this.length).fill(0).map(() => Math.round(Math.random() * 250) + 1);
  randomOrder = Array(this.length).fill(0).map(() => Math.round(Math.random() * this.length));
  randomColor = Array(this.length).fill('blueviolet');
  range = Array(this.length).fill(0).map((x, i) => x = i);
  constructor() {
  }

  ngOnInit() {
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  async bubbleSort(array) {
    for (let i = array.length; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        this.randomColor[j] = 'yellow';
        if (array[j] > array[j + 1]) {
          this.randomColor[j + 1] = 'red';
          await this.delay(10);
          const swap = array[j];
          array[j] = array[j + 1];
          array[j + 1] = swap;
        }
        this.randomColor.fill('blueviolet', 0, i - 1);
      }
      this.randomColor[i - 1] = 'green';
    }
  }

}
