/* 
    Responsibly for all database calls.  When function is execute, we can
    create a variable 
 */

var repo = function () {

    // do db work here.  Every method called has access.  Calling functions don't have
    // access.
    var db = {};

    var get = function(id){
        console.log("Getting user: " + id);
        return {
            name: 'new user from db'
        };
    };

    var save = function(user){
        console.log('Saving ' + user.name + ' to the database.')
    };

    console.log('newing up a new user repository')
    return {
        get: get,
        save: save
    };
};

module.exports = repo();