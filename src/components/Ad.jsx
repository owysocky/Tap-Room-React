import React from "react";

const Ad = props => {
  return (
    <div className="ad">
      <style>{`
      .ad{
        background: rgba(0, 0, 0, 0.5);
        border: solid 1px #a0a0a0;
        border-radius: 10px;
        max-width: 1050px;
      }
      `}</style>
      <h2>{props.event}</h2>
      <h4>{props.location}</h4>
      <p>{props.description}</p>
    </div>
  );
};

export default Ad;
