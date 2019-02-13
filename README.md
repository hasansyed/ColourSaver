# cmr
An application to store colours.
## Installation
### node / npm
Ensure that you have node and npm installed (https://docs.npmjs.com/getting-started/installing-node). Once you have that, install all of the node dependencies for the project listed in `./package.json` by running:
```
$ npm install
```
### bower
Bower (https://bower.io/docs/api/) is one of the node dependencies. Bower is a package manager for front-end libraries (ie. angularjs). Install all the bower dependencies required for this project (listed in `./bower.json`) by running:
```
$ bower install
```
Anytime you want a new bower package, install and automatically save it in the `bower.json` file by running:
```
$ bower install angularjs --save
```
All your application libraries should be stored in the `bower.json` file.
### gulp
Gulp (https://github.com/gulpjs/gulp/blob/master/docs/API.md) is another node dependency for this project. It will allow you to have build tasks. The simplest gulp tasks included in this project is a `connect` (see `./gulpfile.js`). Run the gulp `connect` task by running the following:
```
$ gulp connect
```
This command will launch the application on a provided `localhost:xxxx` path.