import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo.png';

function App(){
  let linkDecoration = {
    textDecoration: 'none',
    color: 'white'
  }
  let lessVisible = {
    textDecoration: 'none',
    color: '#a0a0a0'
  }
  return (
    <div>
    <style jsx>{`
      img{
        height: 100px;
      }
      div{
        height: 100px;
        background-color: #213458;
        text-align: center;
      }
      .links{
        color: white;
        font-weight: 300;
        display: inline-block;
      }
      p{
        margin-top:40px;
        display: inline-block;
        padding-right: 30px;
      }
      .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }
    `}</style>
      <div className="container">
        <div className="links">
          <p><Link to="/" style={linkDecoration}>Home</Link></p>
          <p><Link to="/beer" style={linkDecoration}>On Tap</Link></p>
          <p><Link to="/locations" style={linkDecoration}>Locations</Link></p>
        </div>
        <div>
          <img src={logo}></img>
        </div>
        <div>
          <p><Link to="/" style={lessVisible}>Admin</Link></p>
        </div>
      </div>

    </div>
  );
}

export default App;
