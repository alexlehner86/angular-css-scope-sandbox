import { Component, signal } from '@angular/core';
import { AppHeader } from './components/app-header/app-header';
import { BeerItemList } from './components/beer-item-list/beer-item-list';
import { BEER_LIST } from './const/beer.const';
import { BeerItem } from './models/beer-item.model';

@Component({
    selector: 'app-root',
    imports: [AppHeader, BeerItemList],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    protected readonly beerItems = signal(BEER_LIST.map(response => new BeerItem(response)));
}
