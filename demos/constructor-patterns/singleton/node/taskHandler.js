var myRepo = require('./Repo');

var taskHandler = function () {
    return {
        save: function () {
            myRepo.save('Hi from the taskhandler');
        }
    };
};

module.exports = taskHandler(); // execution here creates a singleton in common.js