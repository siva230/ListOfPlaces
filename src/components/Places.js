import React from 'react';
import Grid from '@material-ui/core/Grid';
import isEmpty from 'lodash/isEmpty';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Loader from './Loader';


const styles = {
    root: {
        marginBottom: 20,
    },
    card: {
      minWidth: 444,
      maxWidth: 444,
      marginBottom: 12,
      marginLeft: 12,
    },
    link: {
        textDecoration: 'none'
    },
    title: {
        marginLeft: 12,
    },
    switch: {
        fontSize: 10,
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

    addtoFavourites = (event, id) => {
        this.props.addToFavourites({
            favourite: event.target.checked,
            id
        });
    }
    
    render() {
        const {places, placeDetailsLoading, favouritePlaces} = this.props;
        const { classes } = this.props;
        return(
            <React.Fragment>
                <Grid 
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    className={classes.root}
                >
                 <Typography 
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.title}
                    >
                        List Of Favourite Places
                </Typography>
                <Link 
                    to={'/places/favouritePlaces'}
                    className={classes.link}>
                        {!isEmpty(favouritePlaces) &&
                            <Button variant="contained" color="primary">
                                Favourite Place List
                            </Button>
                        }
                </Link>
                </Grid>
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
                                        <div>
                                                <Card className={classes.card}>
                                                    <CardContent>
                                                        <Grid container
                                                            direction="row"
                                                            justify="space-between"
                                                            alignItems="center"
                                                            >
                                                                <Grid item xs={6} onClick={() => this.clickHandler(item.id)}>
                                                                <Link 
                                                                    to={`/places/${item.id}`}
                                                                    className={classes.link}
                                                                >
                                                                    {item.name}
                                                                    </Link>
                                                                </Grid>
                                                                <Grid item xs={6}>
                                                                <FormControlLabel
                                                                    className={classes.switch}
                                                                    control={
                                                                    <Switch
                                                                        labelPlacement="top"
                                                                        onChange={(e) =>this.addtoFavourites(e, item.id)}
                                                                        name="checkedB"
                                                                        color="primary"
                                                                        checked={item.favourite}
                                                                    />
                                                                    }
                                                                    label="Add to Favorites"
                                                                />
                                                                </Grid>
                                                            </Grid>
                                                    </CardContent>
                                                </Card>
                                        </div>
                            )}) 
                    }
            </Grid>
            </React.Fragment>
        )
    }
};

export default withStyles(styles)(Places);

