import React from 'react';
import logo from '../assets/images/footer.png';

function Footer(){
  return (
    <div>
    <style global>{`
      img{
        height: 70px;
      }
      .footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: #213458;
        text-align: center;
      }
    `}</style>
    <div className="footer">
      <img src={logo}></img>
    </div>
    </div>
  );
}

export default Footer;
