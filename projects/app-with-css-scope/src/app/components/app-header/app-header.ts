import { Component, ViewEncapsulation } from '@angular/core';
import { CustomNgHostDirective } from '../../directives/ng-host.directive';

@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './app-header.html',
    styleUrl: './app-header.css',
    encapsulation: ViewEncapsulation.None,
    hostDirectives: [CustomNgHostDirective],
})
export class AppHeader {}
