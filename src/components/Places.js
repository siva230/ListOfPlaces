import React from 'react';
import Grid from '@material-ui/core/Grid';
import isEmpty from 'lodash/isEmpty';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Loader from './Loader';


const styles = {
    root: {
        marginBottom: 20,
    },
    card: {
      minWidth: 275,
      maxWidth: 275,
      marginBottom: 12,
      marginLeft: 12,
    },
    link: {
        textDecoration: 'none'
    },
    title: {
        marginLeft: 36,
    }
  };

class Places extends React.Component {

    componentDidMount() {
        if(isEmpty(this.props.places)) {
            this.props.getPlaceDetails();
        }
    }

    clickHandler = (id) => {
        this.props.getSelectedPlaceDetails(id);
    }
    
    render() {
        const {places, placeDetailsLoading} = this.props;
        const { classes } = this.props;
        return(
            <React.Fragment>
                 <Typography 
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.title}
                    >
                        List Of Places: 
                </Typography>
                <Grid 
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        className={classes.root}
                    > 
                    {placeDetailsLoading ?
                        <Loader loading={placeDetailsLoading} /> :
                            places.map((item, index) => {
                                return (
                                        <div onClick={() => this.clickHandler(item.id)}>
                                            <Link 
                                               to={`/places/${item.id}`}
                                               className={classes.link}
                                            >
                                                <Card className={classes.card}>
                                                    <CardContent>
                                                        {item.location}
                                                    </CardContent>
                                                </Card>
                                            </Link>
                                        </div>
                            )}) 
                    }
            </Grid>
            </React.Fragment>
        )
    }
};

export default withStyles(styles)(Places);

