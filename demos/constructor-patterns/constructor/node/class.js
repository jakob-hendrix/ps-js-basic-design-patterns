'use script';

class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    }
    isComplete() {
        console.log('Marking task \'' + this.name + '\' as complete.');
        this.completed = true;
    }
    save() {
        console.log('Saving task \'' + this.name + '\'.');
    }
}

var task1 = new Task("Create demo for constructor");
var task2 = new Task("Create demo for modules");
var task3 = new Task("Create demo for singletons");
var task4 = new Task("Create demo for prototypes");

task1.isComplete();
task2.save();
task3.save();
task4.save();