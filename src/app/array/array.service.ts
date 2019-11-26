import {HostListener, Injectable} from '@angular/core';
import {Sort} from '@angular/material';

export interface SortAlgorithm {
  value: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArrayService {


  arraySize: number; // Controls array size
  delayTime: number; // Delay time for animations
  randomArray: number[]; // Holds random values to be sorted
  randomOrder: number[]; // Maps to the flex order property
  randomColor: string[]; // Maps to the background-color property
  range: number[]; // Defines a list of integers from 0 to arraySize
  currentSort: SortAlgorithm; // Current algorithm being called
  sortAlgorithms: SortAlgorithm[] = [
    {value: 0, name: 'BubbleSort'},
  ];
  constructor() {
    this.setArraySize(100);
  }
  private defineArrays() {
    this.randomArray = Array(this.arraySize).fill(0).map(() => Math.round(Math.random() * 250) + 1);
    this.randomOrder = Array(this.arraySize).fill(0).map(() => Math.round(Math.random() * this.arraySize));
    this.randomColor = Array(this.arraySize).fill('blueviolet');
    this.range = Array(this.arraySize).fill(0).map((x, i) => x = i);
  }
  setArraySize(arraySize: number) {
    this.arraySize = arraySize;
    this.delayTime = Math.floor(arraySize / 10);
    this.defineArrays();
  }
  delay() {
    return new Promise(resolve => setTimeout(resolve, this.delayTime));
  }
  setCurrentSort(value: number) {
    this.currentSort = this.sortAlgorithms.find(ele => ele.value === value);
  }
}
