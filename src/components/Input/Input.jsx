import React from 'react'
import classes from './Input.module.css'

const Input = ({ type, placeholder }) => {
  return (
    <input className={classes.input} type={type} placeholder={placeholder} onChange={(e) => console.log(e.target.value)} />
  )
}

export default Input