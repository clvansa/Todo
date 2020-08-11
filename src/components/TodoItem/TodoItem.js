import React from "react"

const styles = {

    title: {
        display: "inline-block",
        minWidth: 500,
        textAlign:"left" 
    },
     completedStyle : {
        fontStyle: "italic",
        color: "#d35e0f",
        opacity: 0.4,
        textDecoration: "line-through",
        display: "inline-block",
      }
}
const TodoItem = (props) => {
  
    return <li className='todo-item '>
        <input
            type="checkbox"
            checked={props.completed}
            onChange={() => props.handleChange(props.id)}
            style={styles.completedStyle}
            className='input' />
        <p style={props.completed ? styles.completedStyle : styles.title}>
            {props.title}
        </p>
        <button
            onClick={() => props.handleDelete(props.id)}
            className='button'>
            Del
        </button>
    </li>
}

export default TodoItem