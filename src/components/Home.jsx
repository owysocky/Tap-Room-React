import React from 'react';
import event1 from '../assets/images/beer_event.jpg';
import event2 from '../assets/images/beer_event2.jpg';

function Home(){
  return (
    <div>
      <style>{`
        img {
          max-width: 100%;
          height: auto;
        }
        div{
          text-align: center;
        }
      `}</style>
      <img src={event1}></img>
      <img src={event2}></img>
    </div>
  );
}

export default Home;
