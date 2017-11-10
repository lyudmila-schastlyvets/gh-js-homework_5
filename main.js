function createTask() {
    var taskInput = document.getElementById("task-input");
    var currentValue = taskInput.value;

    if (currentValue) {
        var activeFilter = document.getElementsByClassName('active')[0].children[0].id;
        var ul = document.getElementById("result");
        var li = document.createElement("li");
        var input = document.createElement('input');
        ul.appendChild(li);
        li.innerHTML = '<i class="material-icons small close">cancel</i><i class="material-icons small done">offline_pin</i>';
        li.setAttribute('data-name', 'task-open');
        li.setAttribute('class', 'single-task collection-item z-depth-2');
        li.appendChild(input);
        input.setAttribute('type', 'text');
        input.setAttribute('value', currentValue);
        if (activeFilter == 'done-items') {
            li.classList.add('hidden');
        }
        dataLocalStorage();
    } else {
        alert('Please insert task into the field!');
    }
}

document.getElementById('submit').addEventListener('click', function (event) {
    event.preventDefault();
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
        parentElement.classList.add('task-done');
        parentElement.setAttribute('data-name', 'task-done');
        parentElement.children[2].setAttribute('disabled', '');
    }
    dataLocalStorage();
}

document.getElementById('filters-group').addEventListener('click', function (event) {
    var resultItems = document.querySelectorAll('#result li');
    document.getElementsByClassName('active')[0].classList.remove('active');
    event.target.parentElement.classList.add('active');
    switch (event.target.id) {
        case 'done-items':
            Array.prototype.map.call(resultItems, function (el) {
                if (el.dataset.name === 'task-open') {
                    el.classList.add('hidden');
                } else {
                    el.classList.remove('hidden');
                }
            });
            break;
        case 'open-items':
            Array.prototype.map.call(resultItems, function (el) {
                if (el.dataset.name === 'task-done') {
                    el.classList.add('hidden');
                } else {
                    el.classList.remove('hidden');
                }
            });
            break;
        case 'all-items':
            Array.prototype.map.call(resultItems, function (el) {
                el.classList.remove('hidden');
            });
            break;
    }
}, false);

function dataLocalStorage () {
    localStorage.setItem('result-list', JSON.stringify(document.getElementById('result').innerHTML));
}

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('result').innerHTML = JSON.parse(localStorage.getItem('result-list'));
    Array.prototype.map.call(document.getElementsByClassName('hidden'), function (el) {
        el.classList.remove('hidden');
    });
}, false);