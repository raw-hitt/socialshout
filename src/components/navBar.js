import React, { Component } from 'react'
import { Link } from 'react-router-dom'



import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';



export class navBar extends Component {

    constructor() {
        super()


    }

    state = {
        isLoggedIn: false
    }



    componentDidMount() {
        var user = sessionStorage.getItem('username')

        if (user) {
            this.setState({
                isLoggedIn: true
            })


        }
        else {
            this.setState({
                isLoggedIn: false
            })

        }
    }

    Logout() {
        sessionStorage.removeItem('email')
        sessionStorage.removeItem('username')
    }

     

    render() {


        let buttons = "";
        if (this.state.isLoggedIn) {
            buttons = [
                /*<Button color="inherit" component={Link} to="/" >Home</Button>,*/
                <div className="navInner">
                    <div className="create-shout">
                            <Button color="inherit" component={Link} to="/create">Create A Scream</Button>
                            <Button color="inherit" component={Link} to="/">Home</Button>
                            <Button color="inherit" component={Link} to="/profile">My Profile</Button>
                            <Button color="inherit" onClick={this.Logout} component={Link} to="/login">Logout</Button>
                        
                    </div>
                </div>
            ]
        }
        else {
            buttons = [
                <div className="nav-btns">
                    <Button color="inherit" component={Link} to="/login">Login</Button>
                    <Button color="inherit" component={Link} to="/signup" >Signup</Button>
                </div>
            ]
        }



        return (
            <div>
                <React.Fragment>
                    <AppBar>
                        <Toolbar className="nav">
                            {buttons}
                        </Toolbar>
                    </AppBar>
                    <Toolbar />
                </React.Fragment>



            </div>
        )
    }
}

export default navBar
