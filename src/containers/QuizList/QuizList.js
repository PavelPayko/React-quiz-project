import React from 'react'
import classes from './QuizList.module.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

export default class QuizList extends React.Component {
    renderQuizes() {
        return [1, 2, 3].map((quiz, index) => {
            return (
                <li key={index}>
                    <NavLink to={'/quiz/' + quiz} >Тест № {quiz}</NavLink>
                </li>
            )
        })
    }

    componentDidMount() {
        axios.get('https://react-test-61057.firebaseio.com/quiz.json').then(response => {
            console.log(response)
        })
    }
    render() {
        return <div className={classes.QuizList}>
            <h1>Список тестов</h1>
            <ul>
                {this.renderQuizes()}
            </ul>
        </div>
    }
}