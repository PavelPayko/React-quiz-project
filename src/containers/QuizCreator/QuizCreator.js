import React from 'react'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import classes from './QuizCreator.module.css'
import Select from '../../components/UI/Select/Select'
import { createControl, validate, validateForm } from '../../form/FormFramework'

function createOptionControl(num) {
    return createControl({
        label: `Вариант ${num}`,
        id: num,
        errorMessage: 'Значение не может быть пустым',
    }, { required: true })
}
function createFormControls() {
    return {
        question: createControl({
            label: 'Введите вопрос',
            errorMessage: 'Значение не может быть пустым',
        }, { required: true }),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4)
    }
}
export default class QuizCreator extends React.Component {

    state = {
        quiz: [],
        isFormValid: false,
        rightAnswer: 1,
        formControls: createFormControls()

    }
    newQuestionHandler = (event) => {
        event.preventDefault()

        const quiz = this.state.quiz.concat()
        const index = quiz.length + 1
        const { question, option1, option2, option3, option4 } = this.state.formControls
        const questionItem = {
            question: question.value,
            id: index,
            rightAnswerId: this.state.rightAnswer,
            answers: [
                { text: option1.value, id: option1.id },
                { text: option2.value, id: option2.id },
                { text: option3.value, id: option3.id },
                { text: option4.value, id: option4.id }
            ]
        }
        quiz.push(questionItem)
        this.setState({
            quiz,
            isFormValid: false,
            rightAnswer: 1,
            formControls: createFormControls()
        })
    }
    createQuizHandler = event => {
        event.preventDefault()

        console.log(this.state.quiz)
    }
    changeHandler = (value, controlName) => {
        const formControls = { ...this.state.formControls }
        const control = { ...formControls[controlName] }

        control.touched = true
        control.value = value
        control.valid = validate(control.value, control.validation)

        formControls[controlName] = control

        this.setState({
            formControls,
            isFormValid: validateForm(formControls)
        })
    }
    selectChangeHandler = event => {
        console.log(event.target.value)
        this.setState({
            rightAnswer: event.target.value
        })
    }

    renderControls() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]

            return (
                <Input
                    value={control.value}
                    label={control.label}
                    valid={control.valid}
                    shouldValidate={!!control.validation}
                    touched={control.touched}
                    errorMessage={control.errorMessage}
                    onChange={event => this.changeHandler(event.target.value, controlName)}
                ></Input>
            )
        })
    }

    render() {
        const select = <Select
            label='Выберете правильный ответ'
            value={this.state.rightAnswer}
            onChange={this.selectChangeHandler}
            options={[
                { text: 1, value: 1 },
                { text: 2, value: 2 },
                { text: 3, value: 3 },
                { text: 4, value: 4 }
            ]}
        />
        return (
            <div className={classes.QuizCreator}>
                <h1>Создать тест</h1>
                <form>
                    {this.renderControls()}
                    {select}
                    <Button
                        type='normal'
                        onClick={this.newQuestionHandler}
                        disabled={!this.state.isFormValid}
                    >Добавить вопрос
                    </Button>
                    <Button
                        type='normal'
                        onClick={this.createQuizHandler}
                        disabled={this.state.quiz.length === 0}
                    >Создать тест
                    </Button>
                </form>
            </div>
        )
    }
}