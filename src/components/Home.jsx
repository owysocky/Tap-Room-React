import React from "react";
import event1 from "../assets/images/beer_event.jpg";
import event2 from "../assets/images/beer_event2.jpg";
import Ad from "./Ad";

function Home(props) {
  return (
    <div className="home">
      <style>{`
        img {
          max-width: 100%;
          height: auto;
          width: auto\9;
        }
        .home{
          text-align: center;
          position: relative;
          color: white;
        }
        .text{
          text-align: center;
          position: absolute;
          top: 17px;
          left: 20%;
          right: 20%;
        }
      `}</style>
      <img src={event2} />
      <img src={event1} />
      <div className="text">
        {props.adList.map(event => (
          <Ad
            event={event.event}
            location={event.location}
            description={event.description}
            key={event.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
