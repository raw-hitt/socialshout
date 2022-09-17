import React, { Component } from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

import { Link } from 'react-router-dom';
import Navback from '../components/navBack'


class editprofile extends Component {

    constructor() {
        super();

    }


    state = {
        username: "",
        status: "",
        dpLink: "",
        email:"",
        isLoggedIn:false
    }

    componentDidMount() {

        var user = sessionStorage.getItem('username')

        if (user) {
            this.setState({
                isLoggedIn: true,
                username: sessionStorage.getItem('username'),
                dpLink: sessionStorage.getItem('dpLink'),
                email:sessionStorage.getItem('email'),
                status:sessionStorage.getItem('status'),
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


        return (

            <div>
                <Navback></Navback>
                <Card className="editCard">
                    <CardActionArea>
                        <CardMedia className="edit-profileCard-media" 

                            image="https://instagram.fbom15-1.fna.fbcdn.net/v/t51.2885-19/s320x320/79269163_2349537555357059_3813292297211084800_n.jpg?_nc_ht=instagram.fbom15-1.fna.fbcdn.net&_nc_ohc=65hMocseOfUAX--_FON&oh=66fdef204e20d863aaa5574af58da3a3&oe=5FAC44CD"


                        />
                        <CardContent className="edit-Card">

                            <div>
                                {this.state.email}
                            </div>
                            <div>
                                <TextField value={this.state.username} label="username" id="username" name="username" />
                            </div>
                            <div>
                                <TextField value={this.state.status} label="status" id="status" name="status" />
                            </div>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className="edit-Card">
                        <div>
                            <Button size="small" color="primary">Save</Button>
                            <Button size="small" color="secondary" component={Link} to="/profile">Cancel</Button>
                        </div>
                    </CardActions>
                    <CardActions className="edit-Card">
                        <div>
                            <Button size="small" color="secondary" component={Link} to="/change">Change Password</Button>
                        </div>
                    </CardActions>
                </Card>
            </div >
        )
    }
}

export default editprofile

