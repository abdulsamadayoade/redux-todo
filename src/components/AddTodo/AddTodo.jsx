import React, { useState } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import classes from './AddTodo.module.css'
import { addTodo } from '../../features/TodoSlice'
import { useDispatch } from 'react-redux'

const AddTodo = () => {
  const [ todoText, setTodoText ] = useState("");
  const [ reminder, setReminder ] = useState(false);
  const dispatch = useDispatch();

    const submitTodo = (e) => {
      e.preventDefault();

      // Check if the input is empty - a simple valodation to make sure the user input a todo
      if (!todoText.trim()) {
        alert('Please fill in your todo')
      }

      // Create a new todo 
      const newTodo = {
        id: Math.random(),
        title: todoText,
        reminder
      }

      // Dispatch the new todo to the store
      dispatch(addTodo(newTodo))

      // Clear the input and reminder after submission
      setTodoText("");
      setReminder(false);
    }

    const getTodoText = (text) => {
      setTodoText(text);
    }

  return (
    <section className={classes.section}>
      <form onSubmit={submitTodo}>
        <div>
    		  <Input value={todoText}  type="text" placeholder="Enter todo" getTodo={getTodoText} />
			    <Button text="Add Todo" type="submit" />
        </div>
        <div className={classes.reminder__label}>
          <input id="reminder" type="checkbox" checked={reminder} onChange={() => setReminder(!reminder)} />
          <label htmlFor="reminder">Set reminder for this todo</label>
        </div>
      </form>
    </section>
  )
}

export default AddTodo