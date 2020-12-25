import React from 'react'
import classes from './AnswerItem.module.css'

const styleClasses = [classes.AnswerItem]

const AnswerItem = props => {
    if (props.answerState) {
        styleClasses.push(classes[props.answerState])
    }
    return (
        <li className={styleClasses.join(' ')} onClick={() => props.onAnswerClick(props.answer.id)}>
            {props.answer.text}
        </li>
    )
}

export default AnswerItem