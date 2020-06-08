import { Component, OnInit } from '@angular/core';
import { DataProviderDirective } from '../data-provider.directive';

@Component({
  selector: 'app-tab-one',
  template: `
    <p>I am tab one!</p>
    <p>How can I access my respective TabItem?</p>
    <pre>{{ dataProvider.tabContentData | json }}</pre>
  `,
})
export class TabOneComponent implements OnInit {

  constructor(public dataProvider: DataProviderDirective) { }

  ngOnInit() {
    console.log(this.dataProvider);
  }
}
