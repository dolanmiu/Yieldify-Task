import {Component, AfterViewInit, ViewChild} from '@angular/core';
import {Simulation} from './canvas/simulation';

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
    lastCalledTime: number;
    simulation: Simulation;

    @ViewChild('myCanvas') myCanvas;

    ngAfterViewInit() {
        let canvas = this.myCanvas.nativeElement;
        this.context = canvas.getContext('2d');
        canvas.width = 1920;
        this.context.transform(1, 0, 0, -1, 0, canvas.height);
        this.simulation = new Simulation(canvas.width, canvas.height, 20);
        this.tick();

        canvas.addEventListener('click', () => {
            this.simulation.addBall();
        });
    }

    tick() {
        requestAnimationFrame(() => {
            this.tick();
        });
        this.context.clearRect(0, 0, this.myCanvas.nativeElement.width, this.myCanvas.nativeElement.height);
        if (!this.lastCalledTime) {
            this.lastCalledTime = Date.now();
            return;
        }

        let delta = (Date.now() - this.lastCalledTime) / 100;
        this.simulation.update(this.context, delta);
        this.lastCalledTime = Date.now();
        //let ctx = this.context;
        //ctx.clearRect(0, 0, 400, 400);
        //ctx.fillStyle = this.rectColor;
        //ctx.fillRect(0, 0, this.rectW, this.rectH);
    }
}
