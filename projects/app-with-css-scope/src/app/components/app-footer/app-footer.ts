import { Component, ViewEncapsulation } from '@angular/core';
import { CustomNgHostDirective } from '../../directives/ng-host.directive';

@Component({
    selector: 'app-footer',
    imports: [],
    templateUrl: './app-footer.html',
    styleUrl: './app-footer.css',
    encapsulation: ViewEncapsulation.None,
    hostDirectives: [CustomNgHostDirective],
})
export class AppFooter {}
