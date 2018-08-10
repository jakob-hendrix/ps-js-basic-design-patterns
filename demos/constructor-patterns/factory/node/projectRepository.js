/* 
    Responsibly for all database calls.  When function is execute, we can
    create a variable 
 */

var repo = function () {

    // do db work here.  Every method called has access.  Calling functions don't have
    // access.
    var db = {};

    var get = function(id){
        console.log("Getting project: " + id);
        return {
            name: 'new project from db'
        };
    };

    var save = function(project){
        console.log('Saving ' + project.name + ' to the database.')
    };

    console.log('newing up a new project repository')
    return {
        get: get,
        save: save
    };
};

module.exports = repo();