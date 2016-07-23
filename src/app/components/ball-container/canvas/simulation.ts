import {Ball} from './ball';
import {PhysicsManager} from './physics-manager';

export class Simulation {

    private balls: Array<Ball>;
    private physicsManager: PhysicsManager;

    constructor(private canvasWidth: number, private canvasHeight: number, private instanceLimit: number) {
        this.balls = new Array<Ball>();
        this.physicsManager = new PhysicsManager();
    }

    addBall() {
        let ball = new Ball(Math.random() * 10 + 1, this.physicsManager.CoeffOfRestitution, this.physicsManager.CurveSteepness, Math.random() * this.canvasWidth, this.canvasHeight);
        this.balls.push(ball);

        if (this.balls.length > this.instanceLimit) {
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
