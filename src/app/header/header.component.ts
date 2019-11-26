import {Component, HostListener, OnInit} from '@angular/core';
import {ArrayService} from '../array/array.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  innerWidth: number;
  currentSortValue = 0;
  arraySize = 1;
  arrayService: ArrayService;
  constructor(arrayService: ArrayService) {
    this.arrayService = arrayService;
    this.arrayService.setCurrentSort(this.currentSortValue);
    this.arrayService.setArraySize(this.arraySize * 3);
    this.onResize();
  }
  private onResize(event?) {
    this.innerWidth = document.body.clientWidth;
  }

  ngOnInit() {
  }

}
