const inputBox = document.querySelector('#input-box');
const taskList = document.querySelector('#list-container');
const addButton = document.querySelector('#add-task');

//we add a event listener to the button for click event
addButton.addEventListener('click', () => {
    //if the user press the button without any input this happens
    if (inputBox.value === '') {
        alert("Please add something")
    }
    // otherwise we create a li element
    // add the task name to it
    // then append the li to the task list
    else {
        const li = document.createElement('li');
        li.innerText = inputBox.value;
        taskList.appendChild(li);
        //here we add a cross icon to delete the task
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    //at the end we empty the input field
    inputBox.value = "";
});

//when the user clicks on any item in the task list..
taskList.addEventListener('click', function (e) {
    //if the event was dispatched to the list items
    if (e.target.tagName === 'LI')
        //then we add the checked class to it
        e.target.classList.toggle('checked');
    //if the event was dispatched to the span tags(which hold cross icon)
    else if (e.target.tagName === 'SPAN')
        //then we remove its parent element(li) from the dom
        e.target.parentElement.remove();
});
