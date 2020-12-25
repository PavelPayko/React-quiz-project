import React from 'react'
import AnswerItem from './AnswerItem/AnswerItem'
import classes from './AnswersList.module.css'

const AnswersList = props => (
    <ul className={classes.AnswersList}>
        {
            props.answers.map((answer, index) => {
                return (
                    <AnswerItem
                        answer={answer}
                        key={index}
                        onAnswerClick={props.onAnswerClick}
                        answerState={props.answerState ? props.answerState[answer.id] : null}
                    />
                )
            })
        }
    </ul>
)

export default AnswersList