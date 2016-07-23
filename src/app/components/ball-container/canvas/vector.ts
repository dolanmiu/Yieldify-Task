export class Vector {
    constructor(public x?: number, public y?: number) {
        if (!x) {
            this.x = 0;
        }

        if (!y) {
            this.y = 0;
        }
    }
}
