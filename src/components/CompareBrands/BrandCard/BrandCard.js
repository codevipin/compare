import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Close from '@material-ui/icons/Close';

const styles = theme => ({
  card: {
    minWidth: 300,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
});

const BrandCard = ( props ) =>{

    const { classes } = props;

    return (
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton>
              <Close />
            </IconButton>
          }
        />
        <CardMedia
          className={classes.media}
          image="https://m.media-amazon.com/images/I/61IM1qjdoEL._SR500,500_.jpg"
          title="Paella dish"
        />
        <CardContent>
			<Typography gutterBottom variant="h5" component="h3" color="primary">
				Apple
			</Typography>
			<Typography gutterBottom variant="h4" component="h3">
				53326 SAR
			</Typography>
          <Typography component="p">
            Apple iPhone 5C (Green, 8GB)
          </Typography>
        </CardContent>
      </Card>
    );
}

BrandCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BrandCard);
