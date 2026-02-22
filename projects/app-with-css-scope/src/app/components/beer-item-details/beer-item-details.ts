import { Component, input, ViewEncapsulation } from '@angular/core';
import { BeerItem } from '../../models/beer-item.model';
import { AppComponentDirective } from '../../directives/app-component.directive';

@Component({
    selector: 'app-beer-item-details',
    imports: [],
    templateUrl: './beer-item-details.html',
    styleUrl: './beer-item-details.css',
    encapsulation: ViewEncapsulation.None,
    hostDirectives: [AppComponentDirective],
})
export class BeerItemDetails {
    /**
     * The beer item to display.
     */
    public readonly item = input.required<BeerItem>();
}
