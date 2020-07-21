import React, { Component} from 'react';

    export default class AddTodos extends Component{

        state={
            'name': null
        }
        
        handleChange=(e)=>{
            this.setState({
                'name':e.target.value 
            })
        }
    /*Now we need to invoke this method that we get as props, and pass in the state of addTodos Component as a parameter. 
    We’ll do this inside our handleSubmit function that we fire after an onSubmit event attached to the form is triggered. 
    Inside this event, we first need to prevent the default action of reloading the page on submit. 
    We also need to reset the input field inside the form. */

        handleSubmit=(e)=>{
            e.preventDefault();
            //console.log(e.target.item.value);
        this.props.addTodos(this.state);
        console.log(this.state);
            document.querySelector('form').reset();
        }
            
    /*
    We can create a function inside our addTodos Component, which takes in the current todo as a parameter, 
    assigns a unique id to it, then adds it to the state of our App Component. 
    We pass this function as props to theaddTodos Component, which triggers it inside our onSubmit function 
    from where we pass the current state of addTodos Component to the addTodos() function. 
    */

        render() {
            return(
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="item"></label>
                        <input onChange={this.handleChange} type="text" placeholder="Add a todo..." id="item"/>
                        <button className="btn btn-add">Add</button>
                    </form>
                </div>
            )
        }
    }
