import { Component, OnInit } from '@angular/core';
import { DataProviderDirective } from '../data-provider.directive';

@Component({
  selector: 'app-tab-two',
  template: `
    <p>I am tab two!</p>
    <p>How can I access my respective TabItem?</p>
    <pre>{{ dataProvider.tabContentData | json }}</pre>
  `,
})
export class TabTwoComponent implements OnInit {

  constructor(public dataProvider: DataProviderDirective) { }

  ngOnInit() {
    console.log(this.dataProvider);
  }

}
