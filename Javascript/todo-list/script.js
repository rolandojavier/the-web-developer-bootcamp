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
            console.log(list);
        }
    }
  }, 500);