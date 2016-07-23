import {Component} from '@angular/core';
import {BallContainerComponent} from './components/ball-container/ball-container.component';
import {FooterBarComponent} from './shared/footer-bar';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [BallContainerComponent, FooterBarComponent]
})
export class AppComponent {
    title = 'Yieldify Task';
}
