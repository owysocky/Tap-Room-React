import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Locations from "./Locations";
import BeerList from "./BeerList";
import AddBeer from "./AddBeer";
import ErrorHandler from "./ErrorHandler";
import AdminEdit from "./AdminEdit";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faTrashAlt);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onTap: [
        {
          name: "Kentucky Brunch Brand Stout",
          type: "American Imperial Stout",
          company: "Toppling Goliath Brewing Co.",
          alcohol: "12.00",
          price: "5"
        },
        {
          name: "Marshmallow Handjee",
          type: "Russian Imperial Stout",
          company: "3 Floyds Brewing Co.",
          alcohol: "15.00",
          price: "5"
        },
        {
          name: "Barrel-Aged Abraxas",
          type: "American Imperial Stout",
          company: "Perennial Artisan Ales",
          alcohol: "11.00",
          price: "5"
        },
        {
          name: "Hunahpu's Imperial Stout",
          type: "American Imperial Stout",
          company: "Cigar City Brewing",
          alcohol: "11.00",
          price: "5"
        },
        {
          name: "King Julius",
          type: "New England IPA",
          company: "Tree House Brewing Company",
          alcohol: "8.30",
          price: "5"
        },
        {
          name: "Heady Topper",
          type: "New England IPA",
          company: "The Alchemist",
          alcohol: "8.00",
          price: "5"
        }
      ]
    };
    this.handleAddingNewBeer = this.handleAddingNewBeer.bind(this);
  }

  findIndex(id) {
    for (var i = 0; i < this.state.masterPostList.length; i++) {
      if (id == this.state.masterPostList[i].id) {
        return i;
      }
    }
  }

  handleAddingNewBeer(newBeer) {
    var newOnTapList = this.state.onTap.slice();
    newOnTapList.unshift(newBeer);
    this.setState({ onTap: newOnTapList });
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
            <Route exact path="/" component={Home} />
            <Route path="/locations" component={Locations} />
            <Route
              path="/beer"
              render={() => <BeerList beerList={this.state.onTap} />}
            />
            <Route
              exact
              path="/admin"
              render={() => (
                <AddBeer onNewBeerAddition={this.handleAddingNewBeer} />
              )}
            />
            <Route
              path="/admin/edit"
              render={props => (
                <AdminEdit
                  beerList={this.state.onTap}
                  currentRouterPath={props.location.pathname}
                />
              )}
            />
            <Route component={ErrorHandler} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
