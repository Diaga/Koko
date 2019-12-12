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
    } else if (this.arrayService.currentSort.value === 1) {
      await this.selectionSort(array);
    } else if (this.arrayService.currentSort.value === 2) {
      await this.mergeSort(array);
      this.arrayService.randomColor.fill('green');
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

  async mergeSort(array, startIndex = 0, endIndex = array.length) {
    if ((endIndex - startIndex) > 1) {
      const middleIndex = Math.floor((startIndex + endIndex) / 2);
      await this.mergeSort(array, startIndex, middleIndex);
      await this.mergeSort(array, middleIndex, endIndex);
      await this.merge(array, startIndex, middleIndex, endIndex);
    }
    this.arrayService.randomColor.fill('blueviolet');
  }

  private async merge(array, startIndex, middleIndex, endIndex) {
    const leftArray = array.slice(startIndex, middleIndex);
    const rightArray = array.slice(middleIndex, endIndex);
    this.arrayService.randomColor.fill('yellow', startIndex, middleIndex);
    this.arrayService.randomColor.fill('red', middleIndex, endIndex);

    let i = 0;
    let j = 0;
    const k = startIndex;
    for (let l = startIndex; l < endIndex; l++) {
      await this.arrayService.delay().then();
      await this.arrayService.delay().then();
      await this.arrayService.delay().then();
      if (j >= rightArray.length || (i < leftArray.length && leftArray[i] < rightArray[j])) {
        array[l] = leftArray[i];
        i++;
      } else {
        array[l] = rightArray[j];
        j++;
      }
    }
  }
  function partition(array: Array<number>, left: number = 0, right: number = array.length - 1) {
  const pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }

    while (array[j] > pivot) {
      j--;
    }

    if (i <= j) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
      j--;
    }
  }

  return i;
}

function quickSort(array: Array<number>, left: number = 0, right: number = array.length - 1) {
  let index;

  if (array.length > 1) {
    index = partition(array, left, right);

    if (left < index - 1) {
      quickSort(array, left, index - 1);
    }

    if (index < right) {
      quickSort(array, index, right);
    }
  }

  return array;
}
}
