// we are making this app.js turn into a component container.
// after importing todos from ./todos. you should update it below the render() and preferably under the h1 tag
// to delete a todo. 
//Under the hood, setState() is not synchronous. It invokes render() for that component first and then updates the state. A new view is generated, which is then updated in the DOM.
//To delete that particular todo, we have a reference to its id. 
//We use this id and try to match it with every todo present in our state and push every todo in a new array
// — except for the one whose id matches with the passedid.

import React, { Component} from 'react';
import Todos from './Todos';
import AddTodos from './addTodos';

  export default class App extends Component{
    
    state={
      'todos':[ //thoses exemples are already shown on the page
        // variable todos inside the state object. 
        // array of objects with 2 props. name and id
        {'name':'Walk the dog','id':0},
        {'name':'Bake a cake','id':1},
        {'name':'Study for the test','id':2},
      ]
    }
    deleteTodos=(id)=>{
      let todos=this.state.todos.filter(todo=>{
        return todo.id!==id;
      })
      this.setState({
        todos: todos
      })
    }
    addTodos=(newTodo)=>{
        newTodo.id=this.state.todos[this.state.todos.length-1].id+1;
        let todos=[...this.state.todos,newTodo]
        this.setState({
          todos: todos
        })
      this.setState({
        todos: todos
      })
    }
    
    render(){
      return(
        <div>
          <h1>To-do list app using React</h1>
            <AddTodos  addTodos={this.addTodos}></AddTodos>
            <Todos deleteTodos={this.deleteTodos} todos={this.state.todos}></Todos>
          </div>
        
      )
    }
}

  

