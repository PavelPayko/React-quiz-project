import React from 'react'
import classes from './Input.module.css'

const Input = props => {
    const inputType = props.type || 'text'
    const htmlFor = `${inputType}-${Math.random()}`
    const inputClasses = [classes.Input]
    let errMessage = false;
    if (!props.valid && props.touched) {
        inputClasses.push(classes.invalid)
        errMessage = true;
    }

    return (
        <div className={inputClasses.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
                className={(!props.valid && props.touched) ? classes.invalid : null}
            ></input>
            {
                errMessage
                    ? <span className={classes.invalid}>{props.errorMessage}</span>
                    : null
            }

        </div>
    )
}

export default Input