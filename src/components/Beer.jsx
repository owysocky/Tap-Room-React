import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Beer(props) {
  const onTapInfo = (
    <div>
      <style jsx>{`
        .container {
          color: white;
          background: #213458;
          border: 2px solid
            linear-gradient(
              0deg,
              rgba(255, 255, 255, 1) 0%,
              rgba(33, 52, 88, 1) 100%
            );
          border-radius: 15px;
          width: 300px;
          padding: 5px;
          margin-top: 10px;
        }
        .container:hover {
          transform: scale(1.02);
          background: linear-gradient(
            0deg,
            rgba(33, 52, 88, 1) 0%,
            rgba(34, 193, 195, 1) 100%
          );
        }
        .weight {
          font-weight: 300;
        }
      `}</style>
      <div className="container">
        <h4>{props.name}</h4>
        <h4 className="weight">{props.type}</h4>
        <h5> {props.company}</h5>
        <br />
        <p>{props.alcohol}%</p>
        <h4>$ {props.price}</h4>
      </div>
    </div>
  );

  const adminInfo = (
    <div>
      <style jsx>{`
        .container {
          color: white;
          background: #213458;
          border: 2px solid
          background: linear-gradient(
            0deg,
            rgba(33, 52, 88, 1) 0%,
            rgba(34, 193, 195, 1) 100%
          );
          border-radius: 15px;
          width: 300px;
          padding: 5px;
          margin-top: 10px;
        }
        .container:hover {
          transform: scale(1.02);
          background: linear-gradient(
            0deg,
            rgba(33, 52, 88, 1) 0%,
            rgba(34, 193, 195, 1) 100%
          );
        }
        .h4-admin {
          font-weight: 300;
        }
        .btn-admin{
          padding: 10px;
          background-color: white;
          border: 1px solid #213458;
          border-radius: 10px;
        }
        .btn-admin:focus {
          outline: none !important;
          border:1px solid #213458;
          box-shadow: 0 0 10px white;
        }
      `}</style>
      <div className="container">
        <h4 className="h4-admin">{props.name}</h4>
        <button
          onClick={() => {
            props.onClickDelete(props.id);
          }}
          className="btn-admin"
        >
          <FontAwesomeIcon icon="trash-alt" />
        </button>
      </div>
    </div>
  );

  if (props.currentRouterPath === "/admin/edit") {
    return <div>{adminInfo}</div>;
  } else {
    return <div>{onTapInfo}</div>;
  }
}

Beer.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  company: PropTypes.string,
  alcohol: PropTypes.string,
  price: PropTypes.string,
  currentRouterPath: PropTypes.string,
  onClickDelete: PropTypes.func
};

export default Beer;
