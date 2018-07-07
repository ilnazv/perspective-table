import { Component, ElementRef } from '@angular/core';

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

  constructor(private el: ElementRef) {
    this.setRoomParams();
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
    if (this.isRoomScene) {
      this.setRoomParams();
    } else {
      this.setTableParams();
    }
  }

  setRoomParams() {
    this.perspectiveValue = 500;
    this.perspectiveOriginX = 50;
    this.perspectiveOriginY = 50;
    this.translateYPx = 2;
    this.rotateX = 0;
    this.rotateY = 0;
    this.rotateZ = 0;
  }

  setTableParams() {
    this.perspectiveValue = 500;
    this.perspectiveOriginX = 40;
    this.perspectiveOriginY = 30;
    this.translateYPx = 2;
    this.rotateX = -5;
    this.rotateY = -30;
    this.rotateZ = 0;
  }

  toggleScene() {
    if (this.isRoomScene) {
      this.el.nativeElement.children.item('.scene').classList.remove('room');
      this.el.nativeElement.children.item('.scene').classList.add('table');
      this.setTableParams();
    } else {
      this.el.nativeElement.children.item('.scene').classList.remove('table');
      this.el.nativeElement.children.item('.scene').classList.add('room');
      this.setRoomParams();
    }
  }

  get isRoomScene() {
    return this.el.nativeElement.children.item('.scene').classList.value.indexOf('room') !== -1;
  }
}
