import React, { Component } from 'react'
import {Connection} from '../database/projectConfig'
import user from '../classes/user'

//material UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';



import Navbar from '../components/navBar'


class signUp extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            loading: false,
            confirmPassword: "",
            username: "",
            errorMsg: "",
            errors: {},
            dpLink:"",
            about:"",
            userData:[]
        }
    }

    checkForm = (event) => {

        event.preventDefault();

        this.setState({
            loading: true
        })

        this.signUp();
    }
    validateChange = (event) => {


        this.setState({
            [event.target.id]: event.target.value
        })

    }
    changeValue() {

    }

    componentDidMount() {


    }

    checkValidation()
    {

    }

    async signUp() {


        var u = new user();

        if (await u.checkUser(this.state.username, this.state.email)) {

            if (await u.userRegister(this.state.username, this.state.password, this.state.email)) {
               
            var getData = await Connection().GetDataWithCondition("users", "email", "==", ""+ this.state.email + "");
            
        
             this.userData=getData;
           
             

            //trying to store in session
            sessionStorage.setItem('email', this.userData[0].email)
            sessionStorage.setItem('username', this.userData[0].username)
            sessionStorage.setItem('dpLink', this.userData[0].dpLink)
            sessionStorage.setItem('status', this.userData[0].status)
            


                this.props.history.push('/');
            }

        }
        else {
            //error msg
        }
    }
    render() {
        return (

            <div>
                <Navbar></Navbar>
                <Card className="root">
                    <div className="form">
                        <div className="fullWidth">
                            <img src="icon.png" className="login-img" /> <h1>Sign Up</h1>
                        </div>
                        <div>
                            <form noValidate className="form-controls">
                                <div className="fullWidth">
                                    <TextField value={this.state.username} onChange={this.validateChange} label="username" id="username" name="username" />
                                </div>
                                <div className="fullWidth">
                                    <TextField value={this.state.email} onChange={this.validateChange} label="email" id="email" type="email" name="email" />
                                </div>
                                <div className="fullWidth">
                                    <TextField value={this.state.password} onChange={this.validateChange} id="password" label="Password" type="password" name="password" />
                                </div>
                                <div className="fullWidth">
                                    <TextField
                                        id="confirmPassword" name="confirmPassword"
                                        type="password" label="Confirm Password"
                                    />
                                </div>
                                <div className="fullWidth">
                                    <Button onClick={this.checkForm}>Sign Up</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Card>


            </div>

        )
    }
}

export default signUp
