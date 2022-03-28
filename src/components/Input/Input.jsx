import React from 'react'
import classes from './Input.module.css'

const Input = ({ value, type, placeholder, getTodo }) => {
  return (
    <input value={value} className={classes.input} type={type} placeholder={placeholder} onChange={(e) => getTodo(e.target.value)} />
  )
}

export default Input