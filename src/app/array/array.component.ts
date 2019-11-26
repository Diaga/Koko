import {Component, OnInit} from '@angular/core';
import {ArrayService} from './array.service';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {
  arrayService: ArrayService;

  constructor(arrayService: ArrayService) {
    this.arrayService = arrayService;
  }

  ngOnInit() {
  }

  async bubbleSort(array) {
    for (let i = array.length; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        this.arrayService.randomColor[j] = 'yellow';
        if (array[j] > array[j + 1]) {
          this.arrayService.randomColor[j + 1] = 'red';
          await this.arrayService.delay();
          const swap = array[j];
          array[j] = array[j + 1];
          array[j + 1] = swap;
          this.arrayService.randomColor.fill('blueviolet', 0, i - 1);
        }
        this.arrayService.randomColor[i - 1] = 'green';
      }
    }
  }

}
