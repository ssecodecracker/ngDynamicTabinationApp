import { Component, OnInit } from '@angular/core';
import { TabItem } from '../tabs';
import { DataProviderDirective } from '../data-provider.directive';

@Component({
  selector: 'app-tab-three',
  template: `
    <p>I am tab three!</p>
    <p>How can I access my respective TabItem?</p>
    <pre>{{ dataProvider.tabContentData | json }}</pre>
  `,
})
export class TabThreeComponent implements OnInit {


  constructor(public dataProvider: DataProviderDirective) { }

  ngOnInit() {
    console.log(this.dataProvider);
  }

}
