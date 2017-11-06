var arrayLength = 0;

function createTask() {
    var x = document.getElementById("task-input");
    var currentValue = x.value;

    if (currentValue) {
        var ul = document.getElementById("result");
        var li = document.createElement("li");
        li.innerHTML = '<span>Test </span>';
        var input = document.createElement('input');
        ul.appendChild(li).setAttribute('class', 'single-task');
        li.appendChild(input);
        input.setAttribute('value', currentValue);
    }
}

document.getElementById('submit').addEventListener('click', function (event) {
    event.preventDefault();
    ++arrayLength;
    createTask();
    document.getElementById('task-input').value = '';
}, false);