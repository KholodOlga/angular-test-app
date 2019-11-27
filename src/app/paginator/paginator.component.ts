import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() page;
  @Input() pages;
  @Output() changePage: EventEmitter<any> = new EventEmitter(true);

  constructor() {
  }

  ngOnInit() {
  }

  goToPage(page) {
    this.changePage.emit(page);
  }
}
