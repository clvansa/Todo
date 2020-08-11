import React from 'react';
import TodoItem from "./TodoItem/TodoItem";
import Header from "./Header";
import TodoInput from './TodoInput';
import '../App.scss';
import axios  from 'axios'

// class component
class TodoContainer extends React.Component {

    state = {
        todos: []
    }


   componentWillMount  () {
        axios.get('https://jsonplaceholder.typicode.com/todos',{
            params: {_limit : 15}
        })
        .then(
            response => {
                  this.setState({todos: response.data}) 
        }).catch(err => {
            console.log(err)
        });
   }
    onChangeCheckBox = (id) => {
        const updateTodo = this.state.todos.map( todo => {
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo
        })
         this.setState({
            todos: updateTodo
        })
    }

    onDelete = (id) => {
        const deleteTodo = this.state.todos.filter(todo =>  todo.id !== id )
        this.setState({
            todos: deleteTodo
        })
        
    }

    handleAddTodo = (todo) => {
        let id = this.state.todos.length +1 
            let addNewTodo ={
                id:id,
                title: todo,
                completed: false
            }
        this.setState({
            todos:[...this.state.todos,addNewTodo]
        })

    }
  

    render() {

        return (
            <div className="container">
          
                <Header />
                <TodoInput addTodo = {this.handleAddTodo}/>
                <ul style={{padding:40}}>
                    {
                        this.state.todos.map(todo => (
                            <TodoItem 
                                key={todo.id} 
                                title={todo.title} 
                                id={todo.id} 
                                completed={todo.completed} 
                                handleChange={this.onChangeCheckBox}
                                handleDelete={this.onDelete} />
                                
                        ))
                    }
                </ul>
            </div>
        );
    }
}

// functional component
const TodoContainerFunction = (props) => {

    return (
        <div>
            <h1>Hi, ich bin der TodoContainer!</h1>
            <p>{props.text}</p>
        </div>);
};



export default TodoContainer;