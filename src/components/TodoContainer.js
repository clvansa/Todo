import React from 'react';
import TodoItem from "./TodoItem/TodoItem";
import Header from "./Header";
import TodoInput from './TodoInput';
import '../App.scss'

// class component
class TodoContainer extends React.Component {

    state = {
        todos: [
            {
                id: 1,
                title: "React lernen",
                completed: false
            },
            {
                id: 2,
                title: "JavaScript auffrischen (Klassen, usw.)",
                completed: false
            },
            {
                id: 3,
                title: "Props verstehen",
                completed: false
            }
        ]
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
        console.log(id)
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