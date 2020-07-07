import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = ({ loading }) => {
  return (loading ?
     <CircularProgress disableShrink /> :
      null
    );
}

export default Loader;