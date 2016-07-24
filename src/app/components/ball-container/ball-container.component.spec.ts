/* tslint:disable:no-unused-variable */

import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {addProviders, async, inject, describe, it, expect, beforeEach} from '@angular/core/testing';
import {BallContainerComponent} from './ball-container.component';

describe('Component: BallContainer', () => {
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
