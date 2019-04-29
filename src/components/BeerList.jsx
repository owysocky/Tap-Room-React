import React from "react";
import Beer from "./Beer";

function BeerList() {
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
        {onTap.map((element, index) => (
          <Beer
            name={element.name}
            type={element.type}
            company={element.company}
            alcohol={element.alcohol}
            price={element.price}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default BeerList;
