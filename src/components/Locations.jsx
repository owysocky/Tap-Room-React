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
        a{
          text-decoration: none;
          color: #213458;
        }
        a:hover {
          color: #3f81a8;
        }
      `}</style>
      <div className="container">
        <div>
          <img src={loc2} className="images"></img>
          <a href="https://www.google.com/maps/place/Seattle,+WA/@47.6131746,-122.4821492,11z/data=!3m1!4b1!4m5!3m4!1s0x5490102c93e83355:0x102565466944d59a!8m2!3d47.6062095!4d-122.3320708?hl=en&authuser=0"><h3> Seattle, WA</h3></a>
        </div>
        <div>
          <img src={loc3} className="images"></img>
          <a href="https://www.google.com/maps/place/Bellevue,+WA/@47.5978499,-122.2211716,12z/data=!3m1!4b1!4m5!3m4!1s0x54906bcfa3a66041:0xbacf5482ead00765!8m2!3d47.6101497!4d-122.2015159?hl=en&authuser=0"><h3> Bellevue, WA</h3></a>
        </div>
        <div>
          <img src={loc1} className="images"></img>
          <a href="https://www.google.com/maps/place/New+York,+NY/@40.6976701,-74.2598722,10z/data=!3m1!4b1!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127766!4d-74.0059716?hl=en&authuser=0"><h3> New York, NY</h3></a>
        </div>
      </div>
    </div>
  );
}

export default Locations;
