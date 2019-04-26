import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import error from '../assets/images/404-error.jpg'

function ErrorHandler(props){
  return (
    <div className="error-handler">
    <style>{`
      .error-handler{
        text-align: center;
      }
      h2{
        font-weight: 300;
        color: #213458;
      }
      h3{
        font-weight: 300;
        color: #213458;
      }
      img{
        height: 300px;
      }
    `}</style>
      <h2>Page does not exist!</h2>
      <h3>Would you like to return <Link to="/">home</Link> instead?</h3>
      <img src={error}></img>
    </div>
  );
}

export default ErrorHandler;
