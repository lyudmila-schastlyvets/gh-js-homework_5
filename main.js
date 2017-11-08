var arrayLength = 0;

function createTask() {
    var x = document.getElementById("task-input");
    var currentValue = x.value;

    if (currentValue) {
        var ul = document.getElementById("result");
        var li = document.createElement("li");
        li.innerHTML = '<i class="material-icons small close">cancel</i><i class="material-icons small done">offline_pin</i>';
        var input = document.createElement('input');
        ul.appendChild(li).setAttribute('class', 'single-task collection-item z-depth-6');
        li.appendChild(input);
        input.setAttribute('value', currentValue);
        input.setAttribute('type', 'text');
    }
}

document.getElementById('submit').addEventListener('click', function (event) {
    event.preventDefault();
    ++arrayLength;
    createTask();
    document.getElementById('task-input').value = '';
}, false);

document.getElementById('result').addEventListener('click', updateElement, false);

function updateElement (event) {
    var parentElement = event.target.parentElement;
    if (event.target.className == 'material-icons small close') {
        parentElement.remove();
    }
    if (event.target.className == 'material-icons small done') {
        console.dir(parentElement.children[2].setAttribute('style', 'text-decoration: line-through'));
    }
}