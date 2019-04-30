import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Locations from './Locations';
import BeerList from './BeerList';
import AddBeer from './AddBeer';
import ErrorHandler from './ErrorHandler';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onTap: []
    };
    this.handleAddingNewBeer = this.handleAddingNewBeer.bind(this);
  }

  handleAddingNewBeer(newBeer) {
    var newOnTapList = this.state.onTap.slice();
    newOnTapList.push(newBeer);
    this.setState({ onTap: newOnTapList });
    console.log(this.state.onTap);
  }

  render() {
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
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/locations' component={Locations} />
            <Route path='/beer' render={() => <BeerList beerList={this.state.onTap} />} />
            <Route path='/admin' render={() => <AddBeer onNewBeerAddition={this.handleAddingNewBeer} />} />
            <Route component={ErrorHandler} />
          </Switch>
        </div>
        <Footer />

      </div>
    );
  }
}

export default App;
