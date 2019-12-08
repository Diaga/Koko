import {Injectable} from '@angular/core';
import {ArrayService} from '../array/array.service';
import {min} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  arrayService: ArrayService;
  isSorting = false;

  constructor(arrayService: ArrayService) {
    this.arrayService = arrayService;
  }

  async sort(array) {
    this.isSorting = true;
    this.arrayService.randomColor.fill('blueviolet');
    if (this.arrayService.currentSort.value === 0) {
      await this.bubbleSort(array);
    } else if (this.arrayService.currentSort.value === 1) {
      await this.selectionSort(array);
    }
    this.isSorting = false;
  }

  async bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        this.arrayService.randomColor[j] = 'yellow';
        this.arrayService.randomColor[j + 1] = 'red';
        await this.arrayService.delay().then();
        if (array[j] > array[j + 1]) {
          const tmp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = tmp;
        }
        this.arrayService.randomColor.fill('blueviolet', 0, array.length - i - 1);
      }
      this.arrayService.randomColor.fill('green', array.length - i - 1);
    }
  }
  async selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        this.arrayService.randomColor[minIndex] = 'yellow';
        await this.arrayService.delay().then();
        if (array[j] < array[minIndex]) {
          this.arrayService.randomColor[minIndex] = 'blueviolet';
          minIndex = j;
        }
      }
      this.arrayService.randomColor[minIndex] = 'blueviolet';
      const temp = array[minIndex];
      array[minIndex] = array[i];
      array[i] = temp;
      this.arrayService.randomColor[i] = 'green';
    }
  }
}
