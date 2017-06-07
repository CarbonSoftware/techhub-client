import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {
  price: number = 0;
  @ViewChild('inputPrice') inputPrice: ElementRef;
  maxPrice: number = 500;
  minPrice: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onPriceChange() {

  }

}
