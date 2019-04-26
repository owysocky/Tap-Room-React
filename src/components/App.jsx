import React from "react";
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

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

      </Switch>
      <Footer/>

    </div>
  );
}

export default App;
