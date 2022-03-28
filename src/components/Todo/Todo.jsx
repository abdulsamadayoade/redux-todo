import React from 'react'
import classes from './Todo.module.css'
import { deleteTodo, toggleReminder } from "../../features/TodoSlice"
import { useDispatch } from 'react-redux'

const Todo = ({ todo: {title, reminder, id} }) => {
    const dispatch = useDispatch();

  return (
    <div className={classes.todo}>
        <div className={classes.todo__title}>
            <p>{title}</p>
        </div>
        <div className={classes.todo__actions}>
            <button onClick={() => dispatch(deleteTodo(id))} className={`${classes.todo__delete} ${classes.btn}`}>
                <i className="fas fa-times"></i>
            </button>
            <button onClick={() => dispatch(toggleReminder(id))} className={reminder ? `${classes.btn} ${classes.todo__reminder} ${classes.active}` : `${classes.btn} ${classes.todo__reminder}`}>
                <i className="far fa-bell"></i>
            </button>
        </div>
    </div>

  )
}

export default Todo