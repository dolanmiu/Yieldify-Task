/* tslint:disable:no-unused-variable */

import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {addProviders, async, inject, describe, it, expect} from '@angular/core/testing';
import {Ball} from './ball';

describe('Object: Ball', () => {

    it('should create an instance', () => {
        let ball = new Ball(60, 4, 0.1, 1000, 1000);
        expect(ball).toBeTruthy();
    });

    describe('Method: addDelta', () => {

        describe('addDelta(10)', () => {
            let ball: Ball = new Ball(60, 4, 0.1, 1000, 1000);
            ball.addDelta(10);

            it('should change x position correctly', () => {
                expect(Math.floor(ball.position.x)).toBe(462);
            });

            it('should change y position correctly', () => {
                expect(Math.floor(ball.position.y)).toBe(155);
            });
        });

        describe('addDelta(-5) Reversing back in time', () => {
            let ball: Ball = new Ball(60, 4, 0.1, 1000, 1000);
            ball.addDelta(10);
            ball.addDelta(-5);

            it('should change x position correctly', () => {
                expect(Math.floor(ball.position.x)).toBe(244);
            });

            it('should change y position correctly', () => {
                expect(Math.floor(ball.position.y)).toBe(426);
            });
        });


        describe('addDelta(-5) Reversing back to the beginning', () => {
            let ball: Ball = new Ball(60, 4, 0.1, 1000, 1000);
            ball.addDelta(10);
            ball.addDelta(-10);

            it('should change x position correctly', () => {
                expect(Math.floor(ball.position.x)).toBe(0);
            });

            it('should change y position correctly', () => {
                expect(Math.floor(ball.position.y)).toBe(0);
            });
        });
    });
});
