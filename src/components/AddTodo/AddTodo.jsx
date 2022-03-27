import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import classes from './AddTodo.module.css'

const AddTodo = () => {
    const submitTodo = (e) => {
        e.preventDefault();
    }

  return (
    <section className={classes.section}>
        <form onSubmit={submitTodo}>
        <div>
    		<Input type="text" placeholder="Enter todo" />
			<Button text="Add Todo" type="submit" />
        </div>
        <div className={classes.reminder__label}>
            <input id="reminder" type="checkbox" name="reminder" />
            <label htmlFor="reminder">Set reminder for this todo</label>
      </div>
    </form>
    </section>
  )
}

export default AddTodo