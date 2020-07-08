import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    marginBottom12: {
        marginBottom: 12,
    },
  }));

const FavouritePlaces = ({ favouritePlaces }) => {
    const classes = useStyles();
        return(
            <React.Fragment>
                 <Typography 
                    gutterBottom
                    variant="h5"
                    component="h2"
                    >
                        Favourite Places: 
                </Typography>
                <Grid 
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                > <Grid 
                container
                direction="column"
                >
                    {favouritePlaces.length ?
                            favouritePlaces.map((item, index) => {
                                return (
                                    <Grid item xs={12} className={classes.marginBottom12}>
                                        <Card>
                                        <CardContent>
                                            {item.name}
                                        </CardContent>
                                        </Card>
                                         </Grid>
                            )}): <div>No Favourite Place</div>  
                        }
                            </Grid>
                    
            </Grid>
            </React.Fragment>
        )
};

export default FavouritePlaces;

