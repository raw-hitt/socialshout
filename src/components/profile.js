import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom'

import Navbar from '../components/navBar'

class profile extends Component {

    


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


        return (

            <div>
                <Card className="profileCard">
                    <CardActionArea>
                        <CardMedia className="profileCard-media"

                            //image="https://instagram.fbom15-1.fna.fbcdn.net/v/t51.2885-19/s320x320/79269163_2349537555357059_3813292297211084800_n.jpg?_nc_ht=instagram.fbom15-1.fna.fbcdn.net&_nc_ohc=65hMocseOfUAX--_FON&oh=66fdef204e20d863aaa5574af58da3a3&oe=5FAC44CD"
                            image={this.props.dpLink}
                        
                        />
                        <CardContent className="profile-username">
                            <div>
                                {this.props.username}
                            </div>
                        </CardContent>
                        <CardContent className="profile-about">
                            <p className="card-post">
                            {this.props.status}
                            </p>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" component={Link} to="/edit">Edit</Button>
                    </CardActions>
                </Card>
            </div >
        )
    }
}

export default profile

