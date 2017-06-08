import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navSelected: EventEmitter<string> = new EventEmitter();
  nav: string = 'buy';

  constructor() { }

  ngOnInit() {
  }

  onSelect(nav: string) {
    this.nav = nav;
    this.navSelected.emit(nav);
  }

}
