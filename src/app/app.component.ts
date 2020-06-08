import {Component, OnInit} from '@angular/core';
import { TabItem } from './tabs';
import { TabService } from './tab.service';


/**
 * @title Basic use of the tab group
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  tabnone = 'Ujjwal';
  tabs: TabItem[];

  constructor(
    public tabService: TabService
  ) {}

  ngOnInit(): void {
    // tslint:disable-next-line: no-debugger
    debugger;
    this.tabService.activeTab$.subscribe(tab => {
      console.log('active tab set: ', tab);
    });

    this.tabs = this.tabService.getTabs();
    this.tabService.activeTab$.next(this.tabs[0]);
  }

  tabSelected(tab: TabItem) {
    this.tabService.activeTab$.next(tab);
  }
}
