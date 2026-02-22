import { Component, input } from '@angular/core';
import { BeerItem } from '../../models/beer-item.model';

@Component({
  selector: 'app-beer-item-details',
  imports: [],
  templateUrl: './beer-item-details.html',
  styleUrl: './beer-item-details.css',
})
export class BeerItemDetails {
  /**
   * The beer item to display.
   */
  public readonly item = input.required<BeerItem>();
}
