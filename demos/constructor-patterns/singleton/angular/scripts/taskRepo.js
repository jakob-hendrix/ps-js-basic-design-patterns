/* 
    Module for API calls.
    
    Responsibly for all database calls.  When function is execute, we can
    create a variable 
 */


(function(){
    var app = angular.module('taskManager');
    var taskRepo = function ($http) {

        var called = 0;

        // do db work here.  Every method called has access.  Calling functions don't have
        // access.
        var db = {};
    
        var get = function(id){
            called++;
            console.log("Getting task: " + id + " (called " + called + " times)");
            return {
                name: 'task ' + id
            };
        };
    
        var save = function(task){
            called++;
            console.log('Saving ' + task.name + ' to the db (called ' + called + ' times)')
        };
    
        return {
            get: get,
            save: save
        };
    }
    app.service('TaskRepository', taskRepo); //calls new taskRepo --> singleton

}())