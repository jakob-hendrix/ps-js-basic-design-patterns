var repoFactory = function () {
    var repos = this;

    // pull this list from anywhere - load all files in dir, for example
    var repoList = [{name: 'task', source: './taskRepository'},
                    {name: 'user', source: './userRepository'},
                    {name: 'project', source: './projectRepository'}];

    repoList.forEach(function(repo){
        // bracket notation to user variable
        repos[repo.name] = require(repo.source); //object scope for repoFactory
    });
};

module.exports = new repoFactory;