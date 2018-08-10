(function() {
    var app = angular.module('taskManager');

    app.decorator('TaskRepository', function($delegate){
        var oldSave = $delegate.save;
        $delegate.save = function(task){
            console.log('Super special save logging for ' + task.name);
            oldSave(task);
        };
        return $delegate;
    });
}());