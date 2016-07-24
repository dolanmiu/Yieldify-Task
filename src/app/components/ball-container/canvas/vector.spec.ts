/* tslint:disable:no-unused-variable */

import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {addProviders, async, inject, describe, it, expect, beforeEach} from '@angular/core/testing';
import {Vector} from './vector';

describe('Object: Vector', () => {

    describe('simple default constructor', () => {
        let vector: Vector;

        beforeEach(() => {
            vector = new Vector();
        });

        it('should create an instance', () => {
            vector = new Vector();
            expect(vector).toBeTruthy();
        });

        it('should have 0 as y', () => {
            expect(vector.y).toBe(0);
        });

        it('should have 0 as x', () => {
            expect(vector.x).toBe(0);
        });
    });

    describe('parameterised constructor', () => {
        let vector: Vector;

        beforeEach(() => {
            vector = new Vector(10, 10);
        });

        it('should create an instance', () => {
            vector = new Vector();
            expect(vector).toBeTruthy();
        });

        it('should have 10 as y', () => {
            expect(vector.y).toBe(10);
        });

        it('should have 10 as x', () => {
            expect(vector.x).toBe(10);
        });
    });
});
