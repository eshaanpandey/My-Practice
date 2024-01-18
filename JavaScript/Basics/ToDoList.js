let input = prompt("What would you like to do?")
const todoList = [];
while(input != 'quit' && input != 'q'){
    if(input == 'list'){
        console.log("Your list: ")
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}`)
        }
    }

    if(input == 'new'){
        const newTask = prompt('Add your new task');
        todoList.push(newTask);
        console.log(`${newTask} has been added to the list`)
    }

    if(input == 'delete'){
        const index = parseInt(prompt('Which index do you want to delete?'))
        if(!Number.isNaN(index)){
            console.log(`Deleted task: ${index}: ${todoList[index]}`)
            todoList.splice(index, 1);
        }
        else{
            console.log("Not a valid index!")
        }
    }

    input = prompt("What would you like to do?")
}
console.log("Thanks for using the todo list")