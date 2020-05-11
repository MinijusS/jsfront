'use strict';

const ul = document.querySelector('ul');
const input = document.querySelector('input');
const edit = document.querySelector('input[name=edit]');

input.addEventListener('keypress', onEnterKeyPress);

function onEnterKeyPress(event) {
    if(event.keyCode === 13 && event.target.value.trim() != '') {
        const li = createLiElement(event);
        const deleteBtn = createButton('Delete');
        const editBtn = createButton('Edit');
        let div = document.createElement('div');

        div.setAttribute('class', 'buttons');
        div.appendChild(deleteBtn);
        div.appendChild(editBtn);
    
        li.appendChild(div);
        ul.appendChild(li);

        deleteBtn.addEventListener('click', onDeleteClick);
        editBtn.addEventListener('click', editLi);
        event.target.value = '';
    }
}

function onDeleteClick(event) {
    let closestLi = event.target.closest('li');
    closestLi.classList.add('deleteTransition');
    setTimeout(pop, 1000);

    function pop() {
        closestLi.remove();
    }
}

function createButton(name) {
    
    let button = document.createElement('button');
    let buttonText = document.createTextNode(name);
    button.setAttribute('class', name);
    button.appendChild(buttonText);

    return button;
}

function createLiElement(event) {
    let li = document.createElement('li');
    let div = document.createElement('div');
    let text = document.createTextNode(event.target.value);
    div.appendChild(text);
    li.appendChild(div);

    return li;
}

function editLi(event) {
    let li = event.target.closest('li').firstChild;
    
    edit.style.display = 'block';
    edit.value = li.textContent;
    edit.focus();

    function getEditInput(event) {
        if(event.keyCode == 13 && event.target.value.trim() != ''){
            li.textContent = event.target.value.trim();
            edit.value = '';
            edit.style.display = 'none';

            edit.removeEventListener('keyup', getEditInput);
        }
    }

    edit.addEventListener('keyup', getEditInput);
}