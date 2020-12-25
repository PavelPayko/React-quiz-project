import React from 'react'
import classes from './Menu.module.css'

const Menu = props => {
    const menuClasses = [classes.Menu]
    if (props.isOpen) {
        menuClasses.push('icon-cancel')
        menuClasses.push(classes.open)
    } else {
        menuClasses.push('icon-ok')
    }
    return (
        <div className={classes.Menu}>
            <i className={menuClasses.join(' ')} onClick={props.onClick}></i>
        </div >
    )
}

export default Menu