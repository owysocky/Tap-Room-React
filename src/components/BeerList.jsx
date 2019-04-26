import React from "react";
import Beer from "./Beer";

const onTap = [
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
    type: "American Imperial Stout ",
    company: "Perennial Artisan Ales",
    alcohol: "11.00",
    price: "5"
  },
  {
    name: "Hunahpu's Imperial Stout - Double Barrel Aged",
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
];

function BeerList() {
  return (
    <div>
      <style jsx>{`
        div {
          margin-left: 150px;
          margin-top: 40px;
        }
      `}</style>
      {onTap.map((element, index) => (
        <Beer
          name={element.name}
          type={element.type}
          company={element.company}
          alcohol={element.alcohol}
          price={element.price}
          key={index}
        />
      ))}
    </div>
  );
}

export default BeerList;