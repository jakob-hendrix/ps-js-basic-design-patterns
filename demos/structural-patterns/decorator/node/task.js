var Task = function (name) {
    this.name = name;
    this.completed = false;
};

Task.prototype.complete = function () {
    console.log('completing task: ' + this.name);
    this.completed = true;
};

Task.prototype.save = function () {
    console.log('saving task: ' + this.name);
};

var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

var urgentTask = new Task('Urgent Task');

// Decorations to a single object

urgentTask.priority = 2;
urgentTask.notify = function() {
    console.log('Notify important people');
};
urgentTask.complete();
urgentTask.notify();

urgentTask.save = function() {
    console.log('New features');
    this.notify();
    Task.prototype.save.call(this);
}
urgentTask.save();