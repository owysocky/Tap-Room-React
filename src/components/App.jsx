import React from "react";
import { Switch, Route } from 'react-router-dom';

import Header from './Header';

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
    </div>
  );
}

export default App;
