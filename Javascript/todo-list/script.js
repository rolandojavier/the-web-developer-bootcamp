window.setTimeout(function() {
    let resp = "";
    let list = [];
    while(resp !== 'quit'){
        resp = prompt('What would you like to do?');
        // Add a todo
        if(resp === 'new'){
            list.push(prompt('Enter a new todo'));
        }
        // View all todos
        else if(resp === 'list'){
            if(list.length){
                console.log('***********');
                list.forEach(function(todo, index){
                    console.log(index + ': ' + todo);
                });
                console.log('***********');
            }
        }
        // Remove specific todo
        else if(resp === 'delete'){
            list.splice(Number(prompt('Enter index of todo to delete')), 1);
            console.log('Todo Removed');
        }
    }
    console.log('OK, YOU QUIT THE APP');
  }, 500);