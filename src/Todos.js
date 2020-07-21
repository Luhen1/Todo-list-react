import React from 'react';

const Todos=({deleteTodos, todos}) =>{
    const todoItems=[];
    todos.forEach(todo=>{
        todoItems.push (
            <div key={todo.id}>
                <li>{todo.name}<button className="btn btn-delete"
                
                onClick={()=>{deleteTodos(todo.id)}}>X
                
                </button>
                </li>
            </div>
        )
    });

    return(
        <div className="list-container">
            <ul className="list">
                {todoItems}
            </ul>
        </div>
        )
    }

    export default Todos;

/*
Since we’re only updating the UI, 
we make a stateless functional component todos.js and inside the Todos() function 
we take the props we received from the App Component 
and create an empty array called todoItems. 
We cycle through the props and push some JSX along with each todo inside an <li>.
Then inside the return keyword we return some JSX with that todoItems array embedded inside.
In React, JavaScript variables can be directly output in JSX by wrapping them in { }.
*/
