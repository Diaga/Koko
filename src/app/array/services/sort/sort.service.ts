import {Injectable} from '@angular/core';
import {ArrayService} from '../array/array.service';

@Injectable({
  providedIn: 'root'
})
export class SortService {
  isSorting = false;

  constructor(private arrayService: ArrayService) {
  }

  async sort(array) {
    this.isSorting = true;
    this.arrayService.randomColor.fill('blueviolet');
    if (this.arrayService.currentSort.value === 0) {
      await this.bubbleSort(array);
    } else if (this.arrayService.currentSort.value === 1) {
      await this.selectionSort(array);
    } else if (this.arrayService.currentSort.value === 2) {
      await this.insertionSort(array, array.length);
    } else if (this.arrayService.currentSort.value === 3) {
      await this.mergeSort(array);
      this.arrayService.randomColor.fill('green');
    } else if (this.arrayService.currentSort.value === 4) {
      await this.quickSort(array);
    } else if (this.arrayService.currentSort.value === 5) {
      await this.heapSort(array);
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

  async partition(array: Array<number>, left: number = 0, right: number = array.length - 1) {
    const pivot = array[left];

    let i = left;
    let j = right;
    while (i <= j) {
      while (array[i] < pivot) {
        await this.arrayService.delay().then();
        i++;
      }
      while (array[j] > pivot) {
        await this.arrayService.delay().then();
        j--;
      }
      if (i <= j) {
        await this.arrayService.delay().then();
        await this.arrayService.delay().then();
        await this.arrayService.delay().then();
        [array[i], array[j]] = [array[j], array[i]];
        i++;
        j--;
      }
    }
    return i;
  }

  async quickSort(array: Array<number>, left: number = 0, right: number = array.length - 1) {
    let index;

    if (array.length > 1) {
      index = await this.partition(array, left, right);
      this.arrayService.randomColor[index] = 'violet';
      if (left < index - 1) {
        await this.quickSort(array, left, index - 1);
      }

      if (index < right) {
        await this.quickSort(array, index, right);
      }
    }

    return array;
  }

  async shiftDown(array: Array<number>, i: number, j: number) {
    let done = false;
    let maxChild: number;

    while ((i * 2 + 1 < j) && !done) {
      if (i * 2 + 1 === j - 1) {
        maxChild = i * 2 + 1;
      } else if (array[i * 2 + 1] > array[i * 2 + 2]) {
        maxChild = i * 2 + 1;
      } else {
        maxChild = i * 2 + 2;
      }

      if (array[i] < array[maxChild]) {
        [array[i], array[maxChild]] = [array[maxChild], array[i]];
        i = maxChild;
      } else {
        done = true;
      }
    }
  }

  async heapSort(array: Array<number>) {

    for (let i: number = Math.floor(array.length / 2 - 1); i >= 0; i--) {
      await this.shiftDown(array, i, array.length);
    }

    for (let i: number = array.length - 1; i >= 1; i--) {
      [array[0], array[i]] = [array[i], array[0]];
      await this.shiftDown(array, 0, i);
    }
    return array;
  }

  async insertionSort(arr: Array<number>, n: number) {
    // tslint:disable-next-line:one-variable-per-declaration
    let i, key, j;
    for (i = 1; i < n; i++) {
      key = arr[i];
      j = i - 1;
      while (j >= 0 && arr[j] > key) {
        await this.arrayService.delay().then();
        await this.arrayService.delay().then();
        await this.arrayService.delay().then();
        this.arrayService.randomColor[j] = 'black';
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
  }
}
