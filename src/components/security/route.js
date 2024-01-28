import React from 'react';
import { Route as ReactRoute } from 'react-router-dom';

const Route = ({ component: Component, ...rest }) => {
  const handlePermission = props => {
      return <Component {...props} />;
  };

  return <ReactRoute {...rest} render={props => handlePermission(props)} />;
};

export default Route;
