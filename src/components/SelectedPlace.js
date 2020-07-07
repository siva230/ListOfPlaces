import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Loader from './Loader';
 
const SelectedPlace = ({
  selectedPlace,
  selectedPlaceDetailsLoading,
}) => {
  return (
    <React.Fragment>
      {selectedPlaceDetailsLoading ?
      <Grid 
        container
        direction="row"
        justify="center"
        alignItems="center"
     >
        <Loader loading={selectedPlaceDetailsLoading} /> 
      </Grid>:
        <Grid 
          container
          direction="row"
          justify="center"
          alignItems="center"
         >
           <Grid item xs={6}>
          <Card>
            <CardActionArea>
          <CardMedia
            component="img"
            alt={SelectedPlace.id}
            height="300"
            image={selectedPlace.cover}
            title="Contemplative Reptile"
          />
          <CardContent>
          <Typography gutterBottom variant="h6" component="h5">
            Name: {selectedPlace.name}
            </Typography>
            <Typography gutterBottom variant="h6" component="h5">
            Place: {selectedPlace.location}
            </Typography>
            <Typography gutterBottom variant="h6" component="h5">
            Latitude: {selectedPlace.latitude}
            </Typography>
            <Typography gutterBottom variant="h6" component="h5">
            Longitude: {selectedPlace.longitude}
            </Typography>
            <Typography gutterBottom variant="h6" component="h5">
            Place: {selectedPlace.location}
            </Typography>
            <Typography gutterBottom variant="h6" component="h5">
              pincode: {selectedPlace.pincode}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            <Typography variant="body2" color="textSecondary" component="p">
              Description:</Typography> {selectedPlace.official_description}
            </Typography>
            
          </CardContent>
        </CardActionArea>
          </Card>
          </Grid>
          </Grid>
      }
    </React.Fragment>
  );
}
 
export default SelectedPlace;