import {Vector} from './vector';

export class Ball {
    private position: Vector;
    private strokeColor: string;
    private fillColor: string;
    private time: number;

    constructor(private radius: number,
        private coeffOfRestitution: number,
        private airResistance: number,
        private maxDistanceX: number,
        private maxDistanceY: number) {
        this.position = new Vector();
        this.strokeColor = this.getRandomColor();
        this.fillColor = this.getRandomColor();
        this.time = 0;
    }

    private getRandomColor(): string {
        let letters = '0123456789ABCDEF'.split('');
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    private calculateNewPosition(): void {
        // Sine wave manipulation
        let dampeningFactor = 1 + this.time / this.coeffOfRestitution;
        this.position.y = this.maxDistanceY * (Math.abs(Math.sin(this.time) / dampeningFactor));

        // Logistic / Sigmoid Curve
        let sigmoid = 1 / (1 + Math.pow(Math.E, -this.airResistance * this.time));
        let normalisedSigmoid = sigmoid - 0.5;
        this.position.x = normalisedSigmoid * this.maxDistanceX * 2;
    }

    addDelta(delta: number) {
        this.time += delta;
        this.calculateNewPosition();
    }

    draw(context: CanvasRenderingContext2D): void {
        if (this.time < 0) {
            return;
        }

        context.beginPath();
        context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        context.fillStyle = this.fillColor;
        context.fill();
        context.lineWidth = 2;
        context.strokeStyle = this.strokeColor;
        context.stroke();
    }
}
