import { Component } from '@angular/core';
import { BallContainerComponent } from './components/ball-container/ball-container.component';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [BallContainerComponent]
})
export class AppComponent {
    title = 'Yieldify Task';
}
