import React from 'react'
import classes from './Final.module.css'
import Button from '../UI/Button/Button'
import { Link } from 'react-router-dom'

const Final = props => {
    let rightAnswers = 0
    props.results.map((item) => {
        if (item === 'right') {
            rightAnswers++
        }
        return rightAnswers
    })
    return (
        <div className={classes.Final}>
            <p>Final</p>
            <ul >
                {
                    props.quiz.map((question, index) => {
                        return (
                            <li key={index}>
                                {question.question}
                                <i className={props.results[question.id] === 'right' ? 'icon-ok' : 'icon-cancel'} />
                            </li>
                        )
                    })
                }
            </ul>
            <p>{rightAnswers} из {props.quiz.length}</p>
            <div className={classes.controls}>
                <Button
                    type='normal'
                    onClick={props.quizReload}
                >Повторить</Button>
                <Link to='/'><Button
                    type='normal'
                    onClick={props.quizReload}
                >Список тестов</Button></Link>
            </div>

        </div>
    )
}

export default Final