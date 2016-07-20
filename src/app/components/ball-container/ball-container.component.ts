import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ball-container',
  templateUrl: 'ball-container.component.html',
  styleUrls: ['ball-container.component.css']
})
export class BallContainerComponent implements AfterViewInit {
  rectW: number = 100;
  rectH: number = 100;
  rectColor: string = '#FF0000';
  context: CanvasRenderingContext2D;

  @ViewChild('myCanvas') myCanvas;

  ngAfterViewInit() {
    let canvas = this.myCanvas.nativeElement;
    this.context = canvas.getContext('2d');

    this.tick();
  }

  tick() {
    requestAnimationFrame(() => {
      this.tick();
    });

    let ctx = this.context;
    ctx.clearRect(0, 0, 400, 400);
    ctx.fillStyle = this.rectColor;
    ctx.fillRect(0, 0, this.rectW, this.rectH);
  }
}
