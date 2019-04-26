import React from 'react';
import loc1 from '../assets/images/location.png';
import loc2 from '../assets/images/location2.png';
import loc3 from '../assets/images/location3.png';

function Locations(){
  return (
    <div>
      <style>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          margin-top: 20px;
        }
        .images {
          max-width: 100%;
          height: auto;
          width: auto\9;
          border: 4px solid white;
          border-radius: 15px;
        }
        h3{
          font-weight: 300;
          text-align: center;
        }
      `}</style>
      <div className="container">
        <div>
          <img src={loc2} className="images"></img>
          <h3> Seattle, NY</h3>
        </div>
        <div>
          <img src={loc3} className="images"></img>
          <h3> Bellevue, NY</h3>
        </div>
        <div>
          <img src={loc1} className="images"></img>
          <h3> New York, NY</h3>
        </div>
      </div>
    </div>
  );
}

export default Locations;
