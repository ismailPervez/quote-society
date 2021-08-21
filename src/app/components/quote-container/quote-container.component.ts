import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quote-container',
  templateUrl: './quote-container.component.html',
  styleUrls: ['./quote-container.component.css']
})
export class QuoteContainerComponent implements OnInit {

  @Input() count: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  onAddCount(value: number) {
    this.count += value
  }

}
