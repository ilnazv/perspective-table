import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public perspectiveValue: number;
  public perspectiveOriginX: number;
  public perspectiveOriginY: number;

  constructor() {
    this.setDefaultValues();
  }

  perspectiveValueChanged(event: any) {
    this.perspectiveValue = event.value;
  }

  perspectiveOriginXValueChanged(event: any) {
    this.perspectiveOriginX = event.value;
  }

  perspectiveOriginYValueChanged(event: any) {
    this.perspectiveOriginY = event.value;
  }

  setDefaultValues() {
    this.perspectiveValue = 400;
    this.perspectiveOriginX = 50;
    this.perspectiveOriginY = 50;
  }
}
