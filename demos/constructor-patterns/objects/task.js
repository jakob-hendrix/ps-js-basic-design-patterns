'use strict';
//var task = {};
//var task = Object.create(Object.prototype);
//var task = new Object();

var task = {
    title: "My Title",
    description: "My Description"
}

Object.defineProperty(task, 'toString', {   //start JSON object
    value: function() {
        return this.title + ' ' + this.description;
    },
    writable: false,
    enumerable: false,
    configurable: false
});

var urgentTask = Object.create(task);
Object.defineProperty(urgentTask, 'toString', {   //start JSON object
    value: function() {
        return this.title + ' ' + this.description + ' is an urgent task!';
    },
    writable: false,
    enumerable: false,
    configurable: false
});

console.log(urgentTask.toString());