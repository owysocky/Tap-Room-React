import React from "react";
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';

function App(){
  return (
    <div>
      <style global>{`
        div{
          font-family: Courier New;
        }
        .footer-margin{
          margin-bottom: 70px;
        }
      `}</style>
      <div className="footer-margin">
      <Header/>
      <Switch>
        <Home/>
      </Switch>
      </div>
      <Footer/>

    </div>
  );
}

export default App;
