import React from "react";
import Beer from "./Beer";
import PropTypes from 'prop-types';

function BeerList(props) {
  return (
    <div>
      <style jsx>{`
        div{
          margin-bottom: 80px;
        }
        .container{
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          margin-top: 30px;
        }
      `}</style>
      <div className="container">
        {props.beerList.map((element) => (
          <Beer
            name={element.name}
            type={element.type}
            company={element.company}
            alcohol={element.alcohol}
            price={element.price}
            key={element.id}
          />
        ))}
      </div>
    </div>
  );
}

BeerList.propType = {
  beerList: PropTypes.array
};

export default BeerList;
