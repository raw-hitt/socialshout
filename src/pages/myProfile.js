// eslint-disable-next-line
import { Grid, recomposeColor, Button } from "@material-ui/core";

import React, { Component } from 'react'

import post from '../classes/post'

//components
import UserPosts from '../components/userPosts'
import Profile from '../components/profile'


//components from here
import Navbar from '../components/navBar'

export class profile extends Component {

    constructor() {
        super();

    }


    state = {
        posts: null,
        username: "",
        status: "",
        dpLink: ""
    }

    async getPosts() {
        var p = new post();
        this.setState({
            posts: await p.getUserAllPost(sessionStorage.getItem('username'))
        })

    }
    componentDidMount() {

        var user = sessionStorage.getItem('username')

        if (user) {
            this.setState({
                isLoggedIn: true,
                username: sessionStorage.getItem('username'),
                status: sessionStorage.getItem('status'),
                dpLink: sessionStorage.getItem('dpLink')
            })


            this.getPosts();
        }
        else {
            this.setState({
                isLoggedIn: false
            })

            this.props.history.push('/login');
        }


    }
    render() {



        let post = this.state.posts ? (
            this.state.posts.map(ob => <UserPosts key={ob.docId} isUser="true" profilePic={ob.userProfilePhoto} name={ob.userName} body={ob.post} createdAt={(ob.createdAt)} />))
            : <p>Loading....</p>

        return (
            <div>

                <Navbar />
                <Grid container>
                    <Grid item sm={4} xs={12}>
                        <Profile username={this.state.username} dpLink={this.state.dpLink} status={this.state.status} />
                    </Grid>
                    <Grid item sm={8} xs={12}>
                        {post}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default profile
