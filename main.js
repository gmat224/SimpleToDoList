window.addEventListener('load', () => {
    const form = document.querySelector('#new-item-form');
    const input = document.querySelector('#new-item-input');
    const listAdd = document.querySelector('#todo');
    //get submit button pushed event
    form.addEventListener('submit', (e) => {
        //stop refresh when form submut
        e.preventDefault();
        //
        const task = input.value;
        //check if task has been entered
        if (!task){
            alert("Please Enter Something");
            return;
        }
        //create a new task
        const task_element = document.createElement("div");
        task_element.classList.add("todo");
        //create the content that will go in the div
        const task_content_element = document.createElement("div");
        task_content_element.classList.add("content");
        task_element.appendChild(task_content_element);
        //create the todo list element which has the text as readonly unless on edit mode 
        const task_input_element = document.createElement("input");
        task_input_element.classList.add("text");
        task_input_element.type = "text";
        task_input_element.value = task;
        task_input_element.setAttribute("readonly", "readonly");
        task_content_element.appendChild(task_input_element)
        //create the actions you can perform so delete and edit
        const task_actions_element = document.createElement("div")
        task_actions_element.classList.add("actions");
        //add edit and delete buttons
        const task_edit_element = document.createElement("button")
        task_edit_element.classList.add("edit");
        task_edit_element.innerHTML = "Edit";
        const task_delete_element = document.createElement("button")
        task_delete_element.classList.add("delete");
        task_delete_element.innerHTML = "Delete";
        //adding edit and delete element to the actions
        task_actions_element.appendChild(task_edit_element);
        task_actions_element.appendChild(task_delete_element);
        //adding the actions to the to do task itself
        task_element.appendChild(task_actions_element);
        //added the to do task to the main list of elements
        listAdd.appendChild(task_element);
        //reset input value
        input.value = "";
        //check for if the edit is clicked and change it to save option and back accordingly
        task_edit_element.addEventListener('click', () =>{
            if (task_edit_element.innerText.toLocaleLowerCase() == "edit"){
                task_input_element.removeAttribute("readonly");
                task_input_element.focus();
                task_edit_element.innerText = "Save";
            } else {
                task_input_element.setAttribute("readonly", "readonly");
                task_edit_element.innerText = "Edit";

            }
        });
        //check if delete is clicked
        task_delete_element.addEventListener('click', () => {
            listAdd.removeChild(task_element);
        })
    })
})