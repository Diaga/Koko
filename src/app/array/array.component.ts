import {Component, OnInit} from '@angular/core';
import {ArrayService} from './services/array/array.service';
import {SortService} from './services/sort/sort.service';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {

  constructor(private arrayService: ArrayService, private sortService: SortService) {
  }

  ngOnInit() {
  }
}
