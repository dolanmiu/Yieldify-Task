#  [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

YieldifyTask
===

> A bouncing ball simulation/web-app task, made in Angular2. It is assigned to me by Yieldify. 
It is automatically deployed to Heroku here.

> This project has unit tests and uses Travis-CI for automated testing. Check it out [here](https://travis-ci.org/dolanmiu/Yieldify-Task).

## Technologies
<img src="https://angular.io/resources/images/logos/angular2/angular.png" width="150">
<img src="https://avatars1.githubusercontent.com/u/3284117" width="150">
<img src="https://worldvectorlogo.com/logos/heroku.svg" width="150">
<img src="https://worldvectorlogo.com/logos/travis-ci-icon.svg" width="150">

## Install and Set up
1. Pull the repo
2. Make sure you have `Node` installed with `npm` in your `PATH`  
3. Install dependencies `npm install`

## Serve Locally
Run `npm start` for a dev server. Navigate to `http://localhost:4200/`.

## Build
To build you need `angular-cli`. However, the project is built in the `/dist` folder everytime you serve with `npm start`:

1. Install angular-cli globally `npm install angular-cli -g` 
2. Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `npm start`.

## Deployments
### Heroku
This project is automatically deployed to Heroku here:

### Deploying to Github Pages
This requires `angular-cli`. Run `ng github-pages:deploy` to deploy to Github Pages.

Made with TLC by Dolan Miu

[travis-image]: https://travis-ci.org/dolanmiu/Yieldify-Task.svg?branch=master
[travis-url]: https://travis-ci.org/dolanmiu/Yieldify-Task
[daviddm-image]: https://david-dm.org/dolanmiu/Yieldify-Task.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/dolanmiu/Yieldify-Task