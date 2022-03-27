import React from 'react'
import classes from './Header.module.css'

const Header = ({ title }) => {
  return (
    <header className={classes.header}>
        <h1 className={classes.header__title}>{ title }</h1>
    </header>
  )
}

export default Header