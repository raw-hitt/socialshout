import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';







class userPosts extends Component {


    render() {

        var bottomcard = "";
        if (this.props.isUser) {
            bottomcard = [
                <CardActions>
                    <Button size="small" color="secondary">
                        Delete
                    </Button>
                </CardActions>
            ]
        }
        return (

            <div>
                <Card className="root profilecards">
                    <CardActionArea>
                        <CardMedia className="media"

                            image={this.props.profilePic}
                            title={this.props.name}
                        />
                        <CardContent className="card-content">
                            <h2>
                                {this.props.name}
                            </h2>
                            <p>{this.props.createdAt}</p>
                            <p className="card-post">
                                {this.props.body}
                            </p>
                        </CardContent>
                    </CardActionArea>
                    {
                        bottomcard
                    }
                </Card>
            </div >
        )
    }
}

export default userPosts

