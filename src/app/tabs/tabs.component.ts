import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  activeTab: string = 'London';
  constructor() { }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

}
