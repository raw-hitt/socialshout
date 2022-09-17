// eslint-disable-next-line
import { Grid, recomposeColor, Button } from "@material-ui/core";

import React, { Component } from 'react'

import post from '../classes/post'

//components
import UserPosts from '../components/userPosts'


//components from here
import Navbar from '../components/navBar'

export class home extends Component {

    constructor() {
        super();

    }


    state = {
        posts: null,
        username: ""
    }

    async getPosts() {
        var p = new post();
        this.setState({
            posts: await p.getAllPost()
        })

    }
    componentDidMount() {

        var user = sessionStorage.getItem('username')

        if (user) {
            this.setState({
                isLoggedIn: true,
                username: sessionStorage.getItem('username')
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
            this.state.posts.map(ob => <UserPosts key={ob.docId} profilePic={ob.userProfilePhoto} name={ob.userName}  body={ob.post} createdAt={(ob.createdAt)} />))
            : <p>Loading....</p>

        return (
            <div>

                <Navbar />
                <Grid container>
                    <Grid item sm={12} xs={12} className="homePosts">
                        {post}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default home
