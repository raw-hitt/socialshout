import React, { Component } from 'react'
import { Link } from 'react-router-dom'



import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';



export class navBack extends Component {

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


     

    render() {


        let buttons = "";
        if (this.state.isLoggedIn) {
            buttons = [
                /*<Button color="inherit" component={Link} to="/" >Home</Button>,*/
                <div className="navInner">
                    <div className="create-shout">
                            <Button color="inherit" component={Link} to="/profile">Back</Button>
                        
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

export default navBack
