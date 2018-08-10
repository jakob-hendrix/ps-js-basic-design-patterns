var Task = function (data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
}

function TaskCollection() {
    var tasks = {};
    var count = 0;
    var add = function (data) {
        // key is name of task
        tasks[data.name] = new Task(data);
        count++;
    };
    var get = function (name) {
        return tasks[name];
    };
    var getCount = function () {
        return count;
    }

    // Revealing pattern
    return {
        add: add,
        get: get,
        getCount: getCount
    };
};

function getRandomValue (array) {
    return array[Math.floor(Math.random() * array.length)]
}

var tasks = new TaskCollection();
var projects = ['none', 'course', 'training', 'project'];
var priorities = [1, 2, 3, 4, 5];
var users = ['Conan', 'Jesus', 'Buddha', 'Mohammed'];
var completed = [true, false];

var initialMemory = process.memoryUsage().heapUsed;

for (var i = 0; i < 10000; i++) {
    task.add({
        name: 'task' + i,
        priority: getRandomValue(priorities),
        project: getRandomValue(projects),
        user: getRandomValue(users),
        completed: getRandomValue(completed)
    });
};

var afterMemory = process.memoryUsage().heapUsed;
console.log('used memory ' +  (afterMemory - initialMemory) / 1000000);