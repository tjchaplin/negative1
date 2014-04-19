negative1
======================

> Ensure the last parameter to your method is a callback

Plus the ability to specify default arguments for a method

[![Build Status](https://travis-ci.org/tjchaplin/negative1.png?branch=master)](https://travis-ci.org/tjchaplin/negative1)

##Install

  `npm install negative1`

## Purpose

This package makes it seemless to always make sure the last paramater to a method is a callback.  In addition, it allows you to set defaults for paramaters that are not provided.

Instead of writing code everytime to check if the last paramater exists/is a function, this plugin allows you to perform those checks using AOP, so you focus on the behavior and not worry about the paramaters passed in.

## Examples

### Single Function With Default Paramaters
*In progres...*

```javascript
var Scarlet = require('scarlet');
var scarlet = new Scarlet('negative1');
var negative1 = scarlet.plugins.negative1;

function funcWithParams(a,b,c,callback){};

funcWithParams=negative1.ensureCallback(myFunc, [0,false,'anyValue']).resolve();

funcWithParams(1,function(){});
//-> *funcWithParams* will now be called like this:
//-> funcWithParams(1,false,'anyValue',function(){});
```

### Constructor Function with Function And Default Paramaters

```javascript
var Scarlet = require('scarlet');
var scarlet = new Scarlet('negative1');
var negative1 = scarlet.plugins.negative1;

function Func(){
	self.funcWithParams(a,b,c,callback){};

	negative1.ensureCallback(this,'funcWithParams', [0,false,'anyValue'])
}

funcWithParams(1,function(){});
//-> *funcWithParams* will now be called like this:
//-> funcWithParams(1,false,'anyValue',function(){});
```

## Getting Started
This plugin requires Scarlet `~2.0.X`

If you haven't used [Scarlet](https://github.com/scarletjs/scarlet) before, be sure to check out the [Documentation](https://github.com/scarletjs/scarlet).  To use this plugin perform the following:

Install scarlet
```shell
npm install scarlet --save
```

Install plugin
```shell
npm install negative1 --save
```

Once the plugin has been installed, you can use it in your application as follows:

```js
//load scarlet
var Scarlet = require('scarlet');

//Initialize scarlet with the plugin
var scarlet = new Scarlet('negative1');
var negative1 = scarlet.plugins.negative1;
```

## What's with the name

To access the last element of an argument array you have to use -1 ( *negatieve1* ) to access it
```
Array.prototype.slice.call(arguments,-1)
```
