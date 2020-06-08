import { Injectable } from '@angular/core';
import { TabOneComponent } from './components/tab-one.component';
import { TabTwoComponent } from './components/tab-two.component';
import { TabThreeComponent } from './components/tab-three.component';
import { TabItem } from './tabs';
import { Subject } from 'rxjs';



@Injectable()
export class TabService {

  activeTab$: Subject<TabItem>;

  constructor() {
    this.activeTab$ = new Subject();
  }


  getTabs() {
    // tslint:disable-next-line: no-debugger
    debugger;
    return [
      new TabItem( TabOneComponent, {id: 't1', label: 'Tab one', index: 0}),
      new TabItem( TabTwoComponent, {id: 't2', label: 'Tab Two', index: 1}),
      new TabItem( TabThreeComponent, {id: 't3', label: 'Tab Three', index: 2}),
    ]
  }

}
