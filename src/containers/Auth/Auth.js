import React from 'react'
import classes from './Auth.module.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'

export default class Auth extends React.Component {
    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введите корректный Email',
                valid: false,
                touched: false,
                validation: {
                    requred: true,
                    email: true
                }
            },
            password: {
                value: ' ',
                type: 'password',
                label: 'Пароль',
                errorMessage: 'Введите корректный пароль',
                valid: false,
                touched: false,
                validation: {
                    requred: true,
                    minLength: 6
                }
            }

        }
    }

    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    validateControl(value, validation) {
        if (!validation) {
            return true
        }
        let isValid = true

        if (validation.requred) {
            isValid = value.trim() !== ''
        }
        if (validation.email) {
            isValid = this.validateEmail(value) && isValid
        }
        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }

        return isValid
    }

    onChangeHandler = (event, controlName) => {
        console.log(`${controlName}:`, event.target.value)

        const formControls = { ...this.state.formControls }
        const control = { ...formControls[controlName] }

        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)

        formControls[controlName] = control

        let isFormValid = true

        Object.keys(formControls).forEach(ctrl => {
            isFormValid = formControls[ctrl].valid && isFormValid
        })

        this.setState({
            formControls, isFormValid
        })
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    errorMessage={control.errorMessage}
                    shouldValidate={!!control.validation}
                    onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        }
        )
    }

    render() {
        return (
            <div className={classes.Auth}>
                <form className={classes.AuthForm}>
                    {
                        this.renderInputs()
                    }
                    <Button type='normal' disabled={!this.state.isFormValid}>Войти</Button>
                    <Button type='normal' disabled={!this.state.isFormValid}>Зарегестрироваться</Button>
                </form>
            </div>
        )
    }
}