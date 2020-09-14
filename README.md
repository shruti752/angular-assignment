# Loginauthentication

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/` The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
"# angular-assignment" 

i made  mock api call to retrieve the mocked json data to show in front end ,
STEP->
1>Install the json-server <npm install json-server --save>
2>Configure JSON Server <Create data.json file under angular-mock-data/mocks folder.>
3>add it in package.json JSON Server <“mock:server”: “json-server — watch mocks/data.json”>
and then, run  npm run mock:server
4>Setting up proxies for Angular application->We have json-server running at localhost:3000 serving all the required api’s Now, we need to configure our Angular application to redirect the api calls from 4200(default) to 3000
5>add following script to package.json <“start:proxy”: “ng serve — proxy-config proxy.conf.json”> and run <npm run start:proxy>
one port are running on cmd and another on visula studio code
