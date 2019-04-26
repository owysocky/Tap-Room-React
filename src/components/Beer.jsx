import React from 'react';
import PropTypes from 'prop-types';

function Beer(props) {
  return (
    <div>
      <style jsx>{`
        .container{          
          border: 2px solid #213458;
          width: 300px;
          padding: 5px;
          margin-top: 10px;
        }
        .container:hover {
          box-shadow: 5px 5px rgba(0, 0, 0, 0.2);
          transform: scale(1.02);
        }
      `}</style>
      <div className="container">
      <h4>{props.name}</h4>
      <h4>{props.type}</h4>
      <h5>Booth {props.company}</h5>
      <br/>
      <p>{props.alcohol}%</p>
      <h4>$ {props.price}</h4>
    </div>
      </div>

  );
}

Beer.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  company: PropTypes.string,
  alcohol: PropTypes.string,
  price: PropTypes.string
};

export default Beer;
