import React from 'react'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import Final from '../../components/Final/Final'
import classes from './Quiz.module.css'

class Quiz extends React.Component {
    state = {
        activeQuestion: 0,
        answerState: null,
        results: [],
        quiz: [
            {
                question: 'Вопрос №1',
                id: 1,
                rightAnswerId: 2,
                answers: [
                    { text: 'Ответ 1', id: 1 },
                    { text: 'Ответ 2', id: 2 },
                    { text: 'Ответ 3', id: 3 },
                    { text: 'Ответ 4', id: 4 }
                ]
            },
            {
                question: 'Вопрос №2',
                id: 2,
                rightAnswerId: 1,
                answers: [
                    { text: 'Ответ 1', id: 1 },
                    { text: 'Ответ 2', id: 2 },
                    { text: 'Ответ 3', id: 3 },
                    { text: 'Ответ 4', id: 4 }
                ]
            }
        ]
    }

    OnAnswerClickHandler = (id) => {
        console.log('Answer id' + id)
        const question = this.state.quiz[this.state.activeQuestion]
        const results = this.state.results
        if (!this.isQuizFinish()) {
            if (id === question.rightAnswerId) {
                results[question.id] = 'right'
                this.setState({
                    answerState: { [id]: 'right' },
                    activeQuestion: this.state.activeQuestion + 1,
                    results
                })
            } else {
                results[question.id] = 'false'
                this.setState({
                    answerState: { [id]: 'false' },
                    activeQuestion: this.state.activeQuestion + 1,
                    results
                })
                console.log('wrong answer')
            }
        } else {
        }
    }
    isQuizFinish() {
        return this.state.activeQuestion === this.state.quiz.length
    }
    quizReload = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            results: []
        })
    }
    render() {
        return (
            <div className={classes.Quiz}>
                <h1>Quiz</h1>
                {
                    !this.isQuizFinish()
                        ? <ActiveQuiz
                            answers={this.state.quiz[this.state.activeQuestion].answers}
                            question={this.state.quiz[this.state.activeQuestion].question}
                            onAnswerClick={this.OnAnswerClickHandler}
                            activeQuestion={this.state.activeQuestion + 1}
                            quizLength={this.state.quiz.length}
                            answerState={this.state.answerState}
                        />
                        : <Final
                            quiz={this.state.quiz}
                            results={this.state.results}
                            quizReload={this.quizReload}
                        />
                }
            </div>
        )
    }
}

export default Quiz