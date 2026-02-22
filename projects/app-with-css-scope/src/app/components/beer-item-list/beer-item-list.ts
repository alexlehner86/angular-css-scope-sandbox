import { Component, input, ViewEncapsulation } from '@angular/core';
import { BeerItem } from '../../models/beer-item.model';
import { BeerItemDetails } from '../beer-item-details/beer-item-details';
import { CustomNgHostDirective } from '../../directives/ng-host.directive';

@Component({
    selector: 'app-beer-item-list',
    imports: [BeerItemDetails],
    templateUrl: './beer-item-list.html',
    styleUrl: './beer-item-list.css',
    encapsulation: ViewEncapsulation.None,
    hostDirectives: [CustomNgHostDirective],
    host: {
        role: "list",
    }
})
export class BeerItemList {
    /**
     * The beer items to display.
     */
    public readonly items = input.required<BeerItem[]>();
}
