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
  public translateYPx: number;
  public rotateX: number;
  public rotateY: number;
  public rotateZ: number;

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

  translateYPxValueChanged(event: any) {
    this.translateYPx = event.value;
  }

  rotateXValueChanged(event: any) {
    this.rotateX = event.value;
  }

  rotateYValueChanged(event: any) {
    this.rotateY = event.value;
  }

  rotateZValueChanged(event: any) {
    this.rotateZ = event.value;
  }

  setDefaultValues() {
    this.perspectiveValue = 400;
    this.perspectiveOriginX = 50;
    this.perspectiveOriginY = 50;
    this.translateYPx = 0;
    this.rotateX = 0;
    this.rotateY = 0;
    this.rotateZ = 0;
  }
}
