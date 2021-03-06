import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';


// MUI Stuff
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    display: 'flex',
    marginBottom: '1.5em'
  },
  image: {
    minWidth: '12.5em'
  },
  content: {
    padding: '1.562em',
    objectFit: 'cover'
  }
};

class Scream extends Component {
  render() {

    dayjs.extend(relativeTime);

    const { classes, scream : { body, createdAt, userImage, userHandle, screamId, likeCount, commentCount } } = this.props;

    return (
      <Card className={classes.card}>
        <CardMedia
          image={userImage}
          title="Profile media"
          alt="Profile media"
          className={classes.image} />
        <CardContent className={classes.content}>
          <Typography
            variant="h5"
            component={Link}
            to={`/users/${userHandle}`}
            color="primary"
          >
              {userHandle}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {dayjs(createdAt).fromNow()}
          </Typography>
          <Typography variant="body1">{body}</Typography>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(Scream);