import React from 'react'
import Todo from './Todo'



const TodoList = ({todolist}) => {
    return (
      <div>
    
    
     {todolist.map(todo=>
     <Todo todo={todo}></Todo>)} 
        </div>
    )
}

export default TodoList
