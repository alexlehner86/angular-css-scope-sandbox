import { Directive } from "@angular/core";

/**
 * Adds the custom attribute "data-ng-host" to an Angular component's container HTML element.
 * This attribute allows for efficient definition of the lower bounds of a CSS scope definition.
 */
@Directive({
    selector: '[customNgHost]',
    host: {
        "data-ng-host": ""
    }
})
export class CustomNgHostDirective {}