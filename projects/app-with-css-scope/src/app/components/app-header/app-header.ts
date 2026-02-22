import { Component, ViewEncapsulation } from '@angular/core';
import { AppComponentDirective } from '../../directives/app-component.directive';

@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './app-header.html',
    styleUrl: './app-header.css',
    encapsulation: ViewEncapsulation.None,
    hostDirectives: [AppComponentDirective],
})
export class AppHeader {}
