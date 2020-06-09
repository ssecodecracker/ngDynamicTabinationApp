import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';

import { DataProviderDirective } from './data-provider.directive';
import { TabOneComponent } from './components/tab-one.component';
import { TabTwoComponent } from './components/tab-two.component';
import { TabThreeComponent } from './components/tab-three.component';
import { TabService } from './tab.service';

@NgModule({
  declarations: [
    AppComponent,
    TabOneComponent,
    TabTwoComponent,
    TabThreeComponent,
    DataProviderDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  entryComponents: [
    TabOneComponent,
    TabTwoComponent,
    TabThreeComponent,
  ],
  providers: [TabService],
  bootstrap: [AppComponent]
})
export class AppModule { }
