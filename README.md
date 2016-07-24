#  [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

YieldifyTask
===

> A bouncing ball simulation/web-app task, made in Angular2. It is assigned to me by Yieldify.
It is automatically deployed to Heroku [here](https://yieldify-task.herokuapp.com/).

> This project has unit tests and uses Travis-CI for automated testing. Check it out [here](https://travis-ci.org/dolanmiu/Yieldify-Task).
Once all the unit tests have passed, it will deploy to the [Heroku](https://yieldify-task.herokuapp.com/) app.

> This App is compatible with desktop browsers and additionally mobiles, as it is all responsive (thanks to bootstrap).
P.S. If this was a real bouncing ball game, I would've designed this much differently.

## Technologies
<img src="https://angular.io/resources/images/logos/angular2/angular.png" height="150">
<img src="https://avatars1.githubusercontent.com/u/3284117" height="150">
<img src="https://worldvectorlogo.com/logos/heroku.svg" height="150">
<img src="https://worldvectorlogo.com/logos/travis-ci-icon.svg" height="150">
<img src="http://tradesouthwest.com/assets/icons/bootstrap-logo.png" height="150">
<img src="https://strongloop.com/wp-content/uploads/2015/12/nodejs-logo.png" height="150">

### Third Party Libraries

1. Bootstrap

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

### Travis CI

Tests are run automatically with Travis CI.
Travis CI is a hosted, distributed continuous integration service used to build and test software projects hosted at GitHub. You can check my Travis CI build here:

[https://travis-ci.org/dolanmiu/Yieldify-Task](https://travis-ci.org/dolanmiu/Yieldify-Task)


## Running end-to-end tests

Run `npm e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `npm start`.

## Deployments

### Heroku

This project is automatically deployed to Heroku here:

[https://yieldify-task.herokuapp.com](https://yieldify-task.herokuapp.com/).

To make this work on Heroku, I had to create a simple Express server to serve the static files.
It uses a `Procfile`, which launches the tiny Express server `server.js`, which serves the `/dist` folder
I would not use this in practice, but for this project, Heroku works nicely.

### Deploying to Github Pages

This requires `angular-cli`. Run `ng github-pages:deploy` to deploy to Github Pages.

## How it works

The bouncing balls was made using mathematical simulations located in the `ball.ts` class. If it was a game, I would've used a stateful model.
I did it by making the position of the ball `(x, y)` as a function against `time`, because it was cool to do fancy time manipulation.

Made with TLC by Dolan Miu

[travis-image]: https://travis-ci.org/dolanmiu/Yieldify-Task.svg?branch=master
[travis-url]: https://travis-ci.org/dolanmiu/Yieldify-Task
[daviddm-image]: https://david-dm.org/dolanmiu/Yieldify-Task.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/dolanmiu/Yieldify-Task
