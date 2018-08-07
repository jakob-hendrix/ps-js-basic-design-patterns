var Task = function(name) {
    this.name = name;
    this.completed = false;
};

Task.prototype.isComplete = function() {
    console.log('Marking task \'' + this.name + '\' as complete.');
    this.completed = true;
};

Task.prototype.save = function() {
    console.log('Saving task \'' + this.name + '\'.');
};

//Common.js frameword
module.exports = Task;