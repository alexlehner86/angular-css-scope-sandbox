import { Component, ViewEncapsulation } from '@angular/core';
import { AppComponentDirective } from '../../directives/app-component.directive';

@Component({
    selector: 'app-footer',
    imports: [],
    templateUrl: './app-footer.html',
    styleUrl: './app-footer.css',
    encapsulation: ViewEncapsulation.None,
    hostDirectives: [AppComponentDirective],
})
export class AppFooter {}
