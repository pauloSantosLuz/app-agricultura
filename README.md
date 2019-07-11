# Trabalho: Aplicação Angular

Desenvolver uma aplicação utilizando o framework Angular.

A aplicação deve consumir uma API que disponibiliza recursos para a agricultura.

Consumir pelo menos 3 recursos da API além do login.

A API trabalha com alguns atributos que contém informação espacial. O formato representacional para os dados espaciais são em Well-known Text (WKT). 

Por exemplo, a geometria de uma Área é um tipo espacial MULTIPOLYGON, que pode ser representado em WKT como 

"SRID=4326;MULTIPOLYGON(((-45.98 -19.56,-46.05 -19.25,-43.52 -20.37,-43.05 -20.67,-45.98 -19.56)))".

O SRID refere-se ao sistema de referência de coordenadas que os pontos estão sendo referenciados. Por exemplo, 4326 refere-se ao sistema de coordenadas geográficas WGS84, que é um sistema utilizado globalmente. 

A aplicação Angular deve utilizar os seguintes conceitos:

  Login;
  
  Router;
  
  Diretivas ngFor e ngIf;
  
  Reactive Forms;
  
  Requisições HTTP;
  
  Modularizar a aplicação.
 

Layout:

  Aplicar os componentes do tema Material, disponibilizados para o Angular;
  
  Utilizar um componente para atuar com informação espacial (Google Maps, OpenLayers, ...).

# AppAgricultura
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
