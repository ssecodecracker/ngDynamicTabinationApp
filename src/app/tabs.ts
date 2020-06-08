import { Type } from '@angular/core';

interface TabData {
  id: string;
  label: string;
  index: number;
}

export class TabItem {
  constructor(
    public component: any,
    public data: TabData,
    public active?: boolean
  ) {}
}
