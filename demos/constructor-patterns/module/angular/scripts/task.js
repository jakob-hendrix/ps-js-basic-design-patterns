(function(){
    var app = angular.module('taskManager');

    app.factory('Task', function(TaskRepository){
        // TaskRepository will handle all API calls for us
        var Task = function (data) {
            this.name = data.name;
            this.completed = data.completed;
        };

        Task.prototype.complete = function () {
            console.log('[task.js] completing task: ' + this.name);
            this.completed = true;
            this.save();
        };

        Task.prototype.save = function () {
            TaskRepository.save(this);
        };
        
        return Task;
    });
}());