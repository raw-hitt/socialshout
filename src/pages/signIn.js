import React, { Component } from 'react'
import user from '../classes/user'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Connection } from '../database/projectConfig'

import Navbar from '../components/navBar'

const styles = {

}

export class signIn extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            loading: false,
            userData: [],
            errors: {}
        }
    }

    checkForm = (event) => {

        event.preventDefault();

        this.setState({
            loading: true,
        });

        this.login();


    }
    async login() {
        var u = new user();

        //console.log(await u.userLogin(this.state.email, this.state.password));

        if (await u.userLogin(this.state.email, this.state.password)) {

            var checkEmail = await Connection().GetDataWithCondition("users", "email", "==", "" + this.state.email + "");


            this.userData = checkEmail;



            //trying to store in session
            sessionStorage.setItem('email', this.userData[0].email)
            sessionStorage.setItem('username', this.userData[0].username)
            sessionStorage.setItem('dpLink', this.userData[0].dpLink)
            sessionStorage.setItem('status', this.userData[0].status)

            this.props.history.push("/");



        }
    }
    validateChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })
        //console.log('type');
    }
    render() {
        const { classes } = this.props;
        return (
            <div>

                <Navbar />
                <Card className="root">
                    <div className="form">
                        <div className="fullWidth">
                            <img src="icon.png" className="login-img" />
                        </div>
                        <div className="fullWidth">
                            <h1>Login</h1>
                        </div>
                        <div>
                            <form noValidate className="form-controls">
                                <div className="fullWidth">
                                    <TextField value={this.state.email} onChange={this.validateChange} label="email" id="email" type="email" name="email" />
                                </div>
                                <div className="fullWidth">
                                    <TextField
                                        label="Password"
                                        type="password" id="password" name="password"
                                        autoComplete="current-password" value={this.state.password} onChange={this.validateChange} />
                                </div>
                                <div className="fullWidth">
                                    <Button onClick={this.checkForm}>Login</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}

signIn.propTypes = {
    //classes: PropTypes.object.isRequired
}

export default (signIn);
