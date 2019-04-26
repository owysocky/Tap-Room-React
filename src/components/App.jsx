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
      `}</style>

      <Header/>
      <Switch>
        <Home/>
      </Switch>
      <Footer/>

    </div>
  );
}

export default App;
