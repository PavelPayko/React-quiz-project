import React from 'react'
import classes from './Button.module.css'

const Button = props => {
    const btnClasses = [
        classes.Button,
        classes[props.type]
    ]
    return (
        <button
            onClick={props.onClick}
            className={btnClasses.join(' ')}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

export default Button