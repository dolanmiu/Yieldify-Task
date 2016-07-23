import {Component, AfterViewInit, ViewChild} from '@angular/core';
import {Simulation} from './canvas/simulation';

@Component({
    moduleId: module.id,
    selector: 'ball-container',
    templateUrl: 'ball-container.component.html',
    styleUrls: ['ball-container.component.css']
})
export class BallContainerComponent implements AfterViewInit {
    context: CanvasRenderingContext2D;
    lastCalledTime: number;
    simulation: Simulation;
    rewindTime: boolean;
    playbackSpeed: number;

    @ViewChild('myCanvas') myCanvas;

    constructor() {
        this.simulation = new Simulation(200);
        this.lastCalledTime = Date.now();
        this.rewindTime = false;
        this.playbackSpeed = 1;
    }

    ngAfterViewInit() {
        let canvas = this.myCanvas.nativeElement;
        this.context = canvas.getContext('2d');
        this.context.transform(1, 0, 0, -1, 0, canvas.height);
        this.simulation.canvasWidth = canvas.width;
        this.simulation.canvasHeight = canvas.height;
        canvas.addEventListener('click', () => {
            this.simulation.addBall();
        });
        this.tick();
    }

    tick() {
        requestAnimationFrame(() => {
            this.tick();
        });

        this.context.clearRect(0, 0, this.myCanvas.nativeElement.width, this.myCanvas.nativeElement.height);

        let delta = (Date.now() - this.lastCalledTime) / 100;
        delta *= this.playbackSpeed;
        if (this.rewindTime) {
            delta = -delta;
        }

        this.simulation.update(this.context, delta);
        this.lastCalledTime = Date.now();
    }
}
