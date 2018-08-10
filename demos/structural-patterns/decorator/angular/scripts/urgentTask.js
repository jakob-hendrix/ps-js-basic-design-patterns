(function () {
    'use strict';
    var app = angular.module('taskManager');

    // TaskRepository will handle all API calls for us
    app.factory('UrgentTask', function (Task, TaskRepository) {

        var UrgentTask = function (data) {
            Task.call(this, data);       // like 'super' in C# - do Task constructor
            this.priority = data.priority;
        };
        
        UrgentTask.prototype = Object.create(Task.prototype);
        
        UrgentTask.prototype.notify = function () {
            console.log('[urgentTask.js] notifying important people');
        };

        UrgentTask.prototype.save = function () {
            this.notify();
            console.log('[urgentTask.js] do special stuff before saving');
            Task.prototype.save.call(this);
        };

        return UrgentTask;
    });
}())