import { Directive } from "@angular/core";

/**
 * Adds the custom attribute "data-app-component" to an Angular component's container HTML element.
 * This attribute allows for efficient definition of the lower bounds of a CSS scope definition.
 */
@Directive({
    selector: '[appComponent]',
    host: {
        "data-app-component": ""
    }
})
export class AppComponentDirective {}