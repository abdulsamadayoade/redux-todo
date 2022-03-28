import React from 'react'
import Todo from '../Todo/Todo'

const Todos = ({ todos }) => {
  return (
    <div>
      {
        todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
        ))
      }
    </div>
  )
}

export default Todos