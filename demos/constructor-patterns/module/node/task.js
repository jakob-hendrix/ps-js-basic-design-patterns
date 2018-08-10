var Repo = require('./taskRepository');

var Task = function(data) {
    /*
        Take a JSON object, and have that object be the parameter list
    */
    this.name = data.name;
    this.completed = false;
};

Task.prototype.isComplete = function() {
    console.log('Marking task \'' + this.name + '\' as complete.');
    this.completed = true;
};

Task.prototype.save = function() {
    console.log('Saving task \'' + this.name + '\'.');
    Repo.save(this);    // this  = the task
};

//Common.js frameword
module.exports = Task;