/* tslint:disable:no-unused-variable */

import {By} from '@angular/platform-browser';
import {DebugElement, provide} from '@angular/core';
import {addProviders, async, inject, describe, it, expect, beforeEach, beforeEachProviders} from '@angular/core/testing';
import {BallContainerComponent} from './ball-container.component';
import {Simulation} from './canvas/simulation';

class MockSimulation {
    public canvasHeight: number = 234234;
    public updateCallCount: number;

    public update(): void {
        this.updateCallCount++;
    }
}

describe('Component: BallContainer', () => {
    describe('default contructor', () => {
        let component = new BallContainerComponent();

        it('should create an instance', () => {
            expect(component).toBeTruthy();
        });

        it('should have a Simulation instance', () => {
            expect(component.simulation).toBeTruthy();
        });
        it('should have a lastCalledTime instance', () => {
            expect(component.lastCalledTime).toBeTruthy();
        });

        it('should have a rewindTime instance', () => {
            expect(component.rewindTime).toBe(false);
        });

        it('should have a playbackSpeed instance', () => {
            expect(component.playbackSpeed).toBe(1);
        });
    });



    describe('Method: tick', () => {
        let component = new BallContainerComponent();

        beforeEachProviders(() => [
            provide(BallContainerComponent, { useClass: MockSimulation })
        ]);

        it('should have name property set', inject([BallContainerComponent], (simulation: MockSimulation) => {
            // To fix this test, first inject the @ViewChild canvas
            // component.ngAfterViewInit();
            // component.tick();
            // expect(simulation.updateCallCount).toBe(1);
        }));

    });
});
