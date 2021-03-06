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
import AddAd from "./AddAd";

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
          price: "5",
          id: "f0sag"
        },
        {
          name: "Marshmallow Handjee",
          type: "Russian Imperial Stout",
          company: "3 Floyds Brewing Co.",
          alcohol: "15.00",
          price: "5",
          id: "8q8gy"
        },
        {
          name: "Barrel-Aged Abraxas",
          type: "American Imperial Stout",
          company: "Perennial Artisan Ales",
          alcohol: "11.00",
          price: "5",
          id: "ajf96a"
        },
        {
          name: "Hunahpu's Imperial Stout",
          type: "American Imperial Stout",
          company: "Cigar City Brewing",
          alcohol: "11.00",
          price: "5",
          id: "afhui62"
        },
        {
          name: "King Julius",
          type: "New England IPA",
          company: "Tree House Brewing Company",
          alcohol: "8.30",
          price: "5",
          id: "9a87ga"
        },
        {
          name: "Heady Topper",
          type: "New England IPA",
          company: "The Alchemist",
          alcohol: "8.00",
          price: "5",
          id: "09agy2"
        }
      ],
      ad: [
        {
          event: "Summer Solstice Beer Festival",
          dates: "Fri, May 31, 4:00 PM – Sat, Jun 1, 7:30 PM",
          location: "Magnuson Park Hangar 306310 NE 74th St, Seattle, WA",
          description:
            "SFMA Market Association is proud to be part of Seattle's largest indoor Night Market returns to the Magnsuon Park Hangar 30 with over a 150 vendors and a new, alfresco annual Summer Beer Festival"
        }
      ]
    };
    this.handleAddingNewBeer = this.handleAddingNewBeer.bind(this);
    this.handleAddingNewAd = this.handleAddingNewAd.bind(this);
    this.handleDelition = this.handleDelition.bind(this);
  }

  findIndex(id) {
    for (var i = 0; i < this.state.onTap.length; i++) {
      if (id == this.state.onTap[i].id) {
        return i;
      }
    }
  }

  handleDelition(id) {
    let newList = this.state.onTap.slice();
    newList.splice(this.findIndex(id), 1);
    this.setState({ onTap: newList });
  }

  handleAddingNewBeer(newBeer) {
    var newOnTapList = this.state.onTap.slice();
    newOnTapList.unshift(newBeer);
    this.setState({ onTap: newOnTapList });
  }

  handleAddingNewAd(newAd) {
    var list = this.state.ad.slice();
    list.unshift(newAd);
    this.setState({ ad: list });
    console.log(this.state.ad);
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
            <Route
              exact
              path="/"
              render={() => <Home adList={this.state.ad} />}
            />
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
                  onClickDelete={this.handleDelition}
                />
              )}
            />
            <Route
              exact
              path="/admin/ad"
              render={() => <AddAd onNewAdAddition={this.handleAddingNewAd} />}
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
