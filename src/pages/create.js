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

export class create extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            post: "",
            username: "",
            errors: {},
            dpLink: ""
        }
    }


    createPostAndPushToHome = (event) => {
        //create post and push page to home
        if (this.state.post) {

            const logs = {
                'username': this.state.username,
                'activity': 'Post Added',
                'time': Date()

            }

            const post = {
                'userName': this.state.username,
                'post': this.state.post,
                'createdAt': Date(),
                'userProfilePhoto': this.state.dpLink,
                'userId': '9M5Rk11AvZlupdePhhsx'


            }
            Connection().AddData("logs", logs);
            Connection().AddData("posts", post);

            this.props.history.push('/');
        }
        else{
            alert('Monkey Please Write Some Thing')
        }


    }

    validateChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })
        //console.log('type');
    }
    componentDidMount() {

        var user = sessionStorage.getItem('username')

        if (user) {
            this.setState({
                isLoggedIn: true,
                username: sessionStorage.getItem('username'),
                dpLink: sessionStorage.getItem('dpLink')
            })

        }
        else {
            this.setState({
                isLoggedIn: false
            })

            this.props.history.push('/login');
        }


    }
    render() {
        const { classes } = this.props;
        return (
            <div>

                <Navbar />
                <Card>
                    <div className="createPost">
                        <div className="fullWidth">
                            <div className="imgLeft">
                                <img src="icon.png" className="login-img" />
                            </div>
                            <div className="txtRight">
                                <h3>Hello Ape..!!!!</h3>
                            </div>
                        </div>
                        <div className="fullWidth">
                            <h1>Scream Here</h1>
                        </div>
                        <div>
                            <form noValidate className="form-controls">
                                <div className="fullWidth">
                                    <TextField value={this.state.post} onChange={this.validateChange} label="Say Something...." id="post" type="post" name="post" fullWidth multiline rows={3} />
                                </div>
                                <div className="fullWidth">
                                    <Button onClick={this.createPostAndPushToHome}>Scream</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}



export default create;
