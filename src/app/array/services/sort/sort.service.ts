import {Injectable} from '@angular/core';
import {ArrayService} from '../array/array.service';

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
}
