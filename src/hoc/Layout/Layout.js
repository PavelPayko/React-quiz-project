import React from 'react'
import classes from './Layout.module.css'
import Menu from '../../components/Navigation/Menu/Menu'
import Drawer from '../../components/Navigation/Drawer/Drawer'

class Layout extends React.Component {
    state = {
        isOpen: false
    }
    menuOnClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <div className={classes.Layout}>
                <Menu isOpen={this.state.isOpen} onClick={this.menuOnClick} />
                <Drawer isOpen={this.state.isOpen} onClick={this.menuOnClick} />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout