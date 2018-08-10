# ps-js-basic-design-patterns

Intro into JS design patterns.

## JS - The Problem

The language grew over time beyond what it was ever conceived of.  Very easy to write bad JS code.

> "...each pattern represents our current best guess as to what arrangement of the physical environment will worj to solve the problem presented."

The _Gang of four Book_, "Design Patterns".

| Problem | Solutions|
| ------- | -------- |
| Design service Layer | Module Pattern
| Overly Complicated Object Interfaces | Facade Pattern (JQuery) |
| Visibility Into State Changes | Observer Pattern |

## What Makes A Design Pattern

* Solves a problem
* Proven concept
* solution is not obvious
* describes a relationship (9/10)
* signifigant human component

### Why bother?

* Lazy = Good
* common vocabulary

### Types of Patterns

* Creational - deal with creation of new instances of an object
  * constructor (JS-specific)
  * module (JS-specific)
  * factory
  * singleton
* Structural - deal with makeup of an oject
  * decorator
  * facade
  * flyweight
* behavioral - how object work
  * command
  * mediator
  * observer

## Objects in JS

Three ways to create objects:

```javascript
var obj = {}  //just makes a thing in memory
var nextObj = Objetc.create(Object.prototype); //does not execute the constructor
var lastObj = new Object(); // executes the constructor
```

Assigning keys and values

```javascript
var obj = {};
var obj.param = value;      // dot notation
var obj['param2'] = value2; // bracket notation. This take variables to access/assign a parameter
```

Defining __properties__

```javascript
Object.defineProperty(objm 'name', {
    value: 'my name',
    writable: true,     // sets property such that is can't be overwritten
    enumerable: true,   // can enumerate keys - returned in array by Object.keys(obj)
    configurable: true  // once set, can be reset?
})
```

Inheritance

## Creational Design Patterns

Used to create new objects that should be adapted to the situation.

### Constructor (JS-specific)

Used to create new objects with their own object scope (like creating a Class is Java, .NET, etc). Use the `new` keyword.

The `new` keyword:

* creates a brand new object
* link that object to an object prototype
* binds `this` to the new object scope
* implicitly returns `this`

```javascript
// Creates objects from functions. 'New' keyword
function ObjectName(p1, p2) {
  this.p1 = p1;
  this.p2 = p2;
  this.toString = function() {
    return this.p1 + ' ' + this.p2;
  }
  // implicit 'return this'
}
```

Drawback - recreated for each instance (use prototype)

* Prototype - encapsulation of properties for an object. Syntax: `ClassName.prototype.methodName = function (args) { ... }`
* Classes (EcmaScript2015)

```javascript
// Creates objects from functions. 'New' keyword
class Class {
  constructor(name) {
    this.name = name;
  }
  func() {
    // ...
  }
}
```

> Hint: use Babel to trasnpile to whatever...
> See `http://plnkr.co/edit/LQepAH` for an exmaple of basic angular app

### Module Pattern

Simple way to encapsulate similar methods. Creates a **toolbox** of functions to use. At its core, this is just an Object Lteral.

```Javascript
var Module = function () {
  var privateVar = 'I am private...';
  return {
    method: function () {
      ...
    },
    nextMethod: function () {
      ...
    }
  }
}
```

Used for things that you only need one of. Also see *revealing module* pattern, where you only return a list of method names, but the mthods are defined in the module seperately

### Factory Pattern

* A pattern to simplify object creation.
* Creating different patterns based on need
* use cacheing to prevent lots of object instantiation

### singleton

#### Node

* only a single instance of an object across an entire application
* common.js caches all modules after the first time they are loaded. This means every `require('foo')` will return the exact same object returned

#### Angular

* all services are **singletons**

### Summary - Creational Design Patterns

* costructor pattern
* module pattern - bundle like things
* factories - factory repo that creates other repositories, to simplify requires
* singletons - single instance of an object

---

## Structural Design Patterns

Concerned with how objects are compose/made-up.  How to simplify relationship between objects.

* dealt with relationship of jobjects
  * extend functionality
    * decorator
  * simplify functionality
    * facade
    * flyweight

### Decorator Pattern

Used to add new functionality, wihtout being obtrusive.

* give more complete inheritance
* wraps and object
* protects existing objects
* allows extened functionality

This pattern is great because we aren't messing around with the base object/"class". `this` and `call()` are key to this pattern.