import React from 'react'
import classes from './Drawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import { NavLink } from 'react-router-dom'

const links = [
    { name: 'Список', link: '/', exact: false },
    { name: 'Авторизация', link: '/auth', exact: true },
    { name: 'Создать тест', link: '/quiz-creator', exact: false }
]

class Drawer extends React.Component {

    renderLinks() {
        return (
            links.map((link, index) => {
                return (
                    <li key={index}>
                        <NavLink
                            to={link.link}
                            exact={link.exact}
                            className={classes.active}
                            onClick={this.props.onClick}
                        > {link.name}
                        </NavLink>
                    </li >
                )
            })
        )
    }

    render() {
        const drawerClasses = [classes.Drawer]

        if (!this.props.isOpen) {
            drawerClasses.push(classes.close)
        }

        return (
            <React.Fragment>
                <nav className={drawerClasses.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClick} /> : null}
            </React.Fragment>
        )
    }
}

export default Drawer