___
![Bradmax][bradmaxLogo]![AngularJs][angularJsLogo]
___
Repository contains [bradmax player][bradmax] [AngularJs][angularjs] application skeleton for a typical [AngularJS][angularjs] web app. 

It's based on [starter project for AngularJS][angular-seed], please visit [angular-seed github][angular-seed] for more details.

Difference against [angular-seed][angular-seed]:
- replaced bower as deprecated with npm/yarn, *(please read [this](https://bower.io/blog/2017/how-to-migrate-away-from-bower/) for more details)*,
- updated angular to 1.6.9,
- removed everything that is not needed in this example.
___
### Example of usage for:
[bradmax-com/bradmax-player-ag][git-player-ag] : bradmax player angular js library.
___
## Prerequisites
We use a number of [Node.js][node] tools to initialize and build processes. You must have [Node.js][node] and its package manager [npm][npm] installed.
We also recommend to use [yarn][yarn] as replacement for [npm][npm].

You can check required [node.js][node], [npm][npm] and [yarn][yarn] versions in 'engines' section of [./package.json](./package.json) file.
___
| Directory Layout |  |
|---|---|
| *`app/`*          | all of the source files for the application |
| *`└─ app.css`*    | default style sheet |
| *`└─ app.js`*     | main application module |
| *`└─ index.html`* | app layout file *(the main html template file of the app)* |
___
## Usage:
### 1. Install removed dependencies
```
yarn 
```
### 2. Run removed
```
yarn start
```
### 3. Browse to the app @ [`localhost:8000/app/index.html`][local-app-url].
___
#### License MIT 
___
More info @ [bradmax.com][bradmax]

[bradmax]: https://bradmax.com
[bradmax-doc-config]: https://bradmax.com/static/player-doc/configuration.html
[npm-player-ag]: https://npmjs.com/package/bradmax-player-ag
[npm-player-ng]: https://npmjs.com/package/bradmax-player-ng
[npm-player-rxjs]: https://npmjs.com/package/bradmax-player-rxjs
[npm-player-js]: https://npmjs.com/package/bradmax-player-js
[git-player-ag]: https://github.com/bradmax-com/bradmax-player-ag
[git-player-ag-example]: https://github.com/bradmax-com/bradmax-player-ag-example
[git-player-ng]: https://github.com/bradmax-com/bradmax-player-ng
[git-player-ng-example]: https://github.com/bradmax-com/bradmax-player-ng-example
[git-player-rxjs]: https://github.com/bradmax-com/bradmax-player-rxjs
[git-player-rxjs-example]: https://github.com/bradmax-com/bradmax-player-rxjs-example
[git-player-js]: https://github.com/bradmax-com/bradmax-player-js

[local-app-url]: localhost:8000/app/index.html
[angular-seed]: https://github.com/angular/angular-seed
[angularjs]: https://angularjs.org/
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
[yarn]: https://yarnpkg.com/

[bradmaxLogo]: https://raw.githubusercontent.com/bradmax-com/bradmax-player-ag-example/master/assets/md/bradmax.svg?sanitize=true
[angularJsLogo]: https://raw.githubusercontent.com/bradmax-com/bradmax-player-ag-example/master/assets/md/ag.svg?sanitize=true
