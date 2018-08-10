var Task = function (data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
}

var TaskService = function () {
    // module
    return {
        complete: function (task) {
            task.completed = true;
            console.log('completing task: ' + task.name);
        },
        setCompleteDate: function (task) {
            task.completedDate = new Date();
            console.log(task.name + ' completed on ' + task.completedDate);
        },
        notifyCompletion: function (task, user) {
            console.log('notifying [' + user + '] that task [' + task.name + '] completed');
        },
        save: function (task) {
            console.log('saving task: ' + task.name);
        }
    };
}();

var TaskServiceWrapper = function () {
    // module using facade pattern
    var completeAndNotify = function (task) {
        TaskService.complete(myTask);
        if (myTask.completed == true) {
            TaskService.setCompleteDate(myTask);
            TaskService.notifyCompletion(myTask, myTask.user);
            TaskService.save(myTask);
        };
    }
    
    return {
        completeAndNotify: completeAndNotify
    }
} (); // <-- instead of creating this, just execute it. Return executed function

var myTask = new Task({
    name: 'MyTask',
    priority: 1,
    project: 'Courses',
    user: 'Jakob',
    completed: false
});

console.log(myTask);
TaskServiceWrapper.completeAndNotify(myTask);
console.log(myTask);