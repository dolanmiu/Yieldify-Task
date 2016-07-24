import {Ball} from './ball';

export class Simulation {
    private _balls: Array<Ball>;

    public canvasWidth: number;
    public canvasHeight: number;

    public get balls(): Array<Ball> {
        return this._balls;
    }

    constructor(public instanceLimit: number) {
        this._balls = new Array<Ball>();
        this.canvasWidth = 0;
        this.canvasHeight = 0;
    }

    addBall() {
        let ball = new Ball(Math.random() * 60 + 2, 4, 0.1, Math.random() * this.canvasWidth, Math.random() * this.canvasHeight);
        this.balls.push(ball);

        while (this.balls.length > this.instanceLimit) {
            this.balls.shift();
        }
    }

    update(context: CanvasRenderingContext2D, delta: number) {
        // Update every ball before drawing.
        this.balls.forEach(ball => {
            ball.addDelta(delta);
        });

        this.balls.forEach(ball => {
            ball.draw(context);
        });
    }
}
