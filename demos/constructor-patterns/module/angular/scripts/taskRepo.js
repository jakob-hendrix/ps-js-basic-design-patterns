/* 
    Module for API calls.
    
    Responsibly for all database calls.  When function is execute, we can
    create a variable 
 */


(function(){
    var app = angular.module('taskManager');
    var taskRepo = function ($http) {

        // do db work here.  Every method called has access.  Calling functions don't have
        // access.
        var db = {};
    
        var get = function(id){
            console.log("Getting task: " + id);
            return {
                name: 'new task from db'
            };
        };
    
        var save = function(task){
            console.log('Saving ' + task.name + ' to the database.')
        };
    
        return {
            get: get,
            save: save
        };
    }
    app.service('TaskRepository', taskRepo);

}())