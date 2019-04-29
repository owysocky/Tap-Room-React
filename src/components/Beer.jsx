import React from 'react';
import PropTypes from 'prop-types';

function Beer(props) {
  return (
    <div>
      <style jsx>{`
        .container{
          color: white;
          background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(33,52,88,1) 100%);
          border: 2px solid linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(33,52,88,1) 100%);
          border-radius: 15px;
          width: 300px;
          padding: 5px;
          margin-top: 10px;
        }
        .container:hover {
          transform: scale(1.02);
          background: linear-gradient(0deg, rgba(33,52,88,1) 0%, rgba(34,193,195,1) 100%);
        }
        .weight{
          font-weight: 300;
        }
      `}</style>
      <div className="container">
        <h4>{props.name}</h4>
        <h4 className="weight">{props.type}</h4>
        <h5>Booth {props.company}</h5>
        <br />
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
