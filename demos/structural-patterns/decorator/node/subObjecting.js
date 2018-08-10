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

// new constructor
var UrgentTask = function(name, priority) {
    Task.call(this, name);       // like 'super' in C#
    this.priority = priority;
};

UrgentTask.prototype = Object.create(Task.prototype);

UrgentTask.prototype.notify = function () {
    console.log('notifying important people');
    Task.prototype.notify.call(this);
}
UrgentTask.prototype.save = function () {
    console.log('do special stuff before saving');
    Task.prototype.save.call(this);
}

var ut = new UrgentTask('This is Urgent', 1)

ut.complete();
ut.save();
console.log(ut);