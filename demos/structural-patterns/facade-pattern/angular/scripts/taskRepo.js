(function () {
    //'use strict';
    var taskService = function ($http) {
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
    };
    var app = angular.module('taskManager');
    app.service('taskService', taskService);

}());