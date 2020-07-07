import React from 'react';
import {Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import store from './store';
import './App.css';
import PlacesContainer from './containers/PlacesContainer';
import PlacesDetailsContainer from './containers/PlacesDetailsContainer';

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Container fixed>
        <Typography component="div" className='container' >
        <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/places" />
          </Route>
          <Route exact path="/places">
              <PlacesContainer />
          </Route>
          <Route path="/places/:id" component={PlacesDetailsContainer} />
        </Switch>
    </Router>
    </Typography>
    </Container>
    </Provider>
  );
}

export default App;
