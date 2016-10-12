# Tree Shaking Example App

This repository is a companion of [this blog post](http://blog.rangle.io/optimize-your-angular2-application-with-tree-shaking/#comment-2911360549) about tree shaking and Angular 2. 

This simple app consists of only 2 files, the main JS file called _index.ts_ and an example library called _library.ts_

_src/library.ts_

```js
export var myString = 'hello';
export var myNumber = 4008;
```

_src/index.ts_

```js
import { myNumber } from './library';
console.log(myNumber);
```

Notice that our simple app is only using the variable `myNumber` and not `myString`. Because tree shaking is working properly, after running the command `npm run build:prod` the string `hello` is not found in the bundle file `dist/app.js`.

```js
!function(n){function r(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var t={};return r.m=n,r.c=t,r.i=function(n){return n},r.d=function(n,r,t){Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:t})},r.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},r.p="",r(r.s=1)}([function(n,r,t){"use strict";t.d(r,"a",function(){return e});var e=4008},function(n,r,t){"use strict";var e=t(0);console.log(e.a)}]);
```
