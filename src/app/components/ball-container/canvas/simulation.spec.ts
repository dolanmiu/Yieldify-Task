/* tslint:disable:no-unused-variable */

import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {addProviders, async, inject, describe, it, expect, beforeEach} from '@angular/core/testing';
import {Simulation} from './simulation';

describe('Object: Vector', () => {

    describe('default constructor', () => {
        let simulation: Simulation;

        beforeEach(() => {
            simulation = new Simulation(3);
        });

        it('should create an instance', () => {
            expect(simulation).toBeTruthy();
        });

        it('should add 1 ball to the balls', () => {
            simulation.addBall();
            expect(simulation.balls.length).toBe(1);
        });

        it('should not allow modification of the balls array from the outside', () => {
            expect(() => {
                simulation.balls = null;
            }).toThrow();
        });
    });

    describe('Property: instanceLimit', () => {
        let simulation = new Simulation(3);

        it('should cap the amount of balls to the instance limit specified', () => {
            simulation.instanceLimit = 3;
            // adding more than 3 balls
            simulation.addBall();
            simulation.addBall();
            simulation.addBall();
            simulation.addBall();
            simulation.addBall();
            expect(simulation.balls.length).toBe(3);
        });

    });
});
