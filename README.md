# Angular and CSS Scope Best Practices

In this repo, I compare an Angular application using the standard view encapsulation with an application that uses the modern
CSS scoping feature [@scope](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@scope) instead.

Check out the [live version of the CSS scoped app](https://alexlehner86.github.io/angular-css-scope-sandbox/) on GitHub Pages

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.4.

## Efficient use of CSS @scope

The project `app-with-css-scope` includes the custom directive `AppComponentDirective`. When applied to a component, the directive adds the custom attribute `data-app-component` to the component's container HTML element. This attribute allows for efficient definition of the lower bounds of a CSS scope definition.

For example, the component `BeerItemList` applies the directive using the `hostDirectives` property of the component decorator:

```
@Component({
    selector: 'app-beer-item-list',
    hostDirectives: [AppComponentDirective],
    ...
})
export class BeerItemList { ... }
```

The app component includes the `BeerItemList` and other components in its template. To ensure that the styles for the app component don't affect its child components, we define the CSS scope the following way:

```
@scope (app-root) to ([data-app-component] > *) {
    ...
}
```

This enables us to style the app component's content, including the container elements of the child components like `<app-beer-item-list>`. But the content of the child components are excluded via the scope's lower bound definition `[data-app-component] > *`.

## Bundle Size Findings

The production build for both example applications are roughly the same size:
- *app-with-css-scope*: The `main.js` file has about 114 kB raw size
- *app-without-css-scope*: The `main.js` file has about 113 kB raw size

In an Angular application using View Encapsulation, the JavaScript code for components includes CSS definitions with the generated `[_nghost-xxx]` and `[_ngcontent-xxx]` attribute selectors. These represent additional characters that increase the file size. Example:

```
styles: [
    '[_nghost-%COMP%]{display:block}header[_ngcontent-%COMP%]{background-color:var(--light-black);...'
],
```

The JavaScript code of an Angular application using native CSS scoping doesn't include these attribute selectors. Instead, the CSS definitions include the @scope rule. Example:
```
styles: [
    '@scope (app-header){:scope{display:block}header{background-color:var(--light-black);...'
],
```

Futhermore, the `AppComponentDirective` and its inclusion with `hostDirectives: [AppComponentDirective],` also slightly increases the bundle size.

All in all, I expect an application using CSS @scope instead of View Encapsulation to scale better with more components and CSS definitions. In the end, a middle to large application with CSS @scope should have a smaller bundle size compared to the same application using Angular's View Encapsulation instead.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
