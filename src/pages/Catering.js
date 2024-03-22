import React, { useState } from "react";
import axios from "axios";
function Catering() {

  return (
    <div id="Catering">
      <div id="food-hero">
        <p>Having a party? Select one of our catering packages below!</p>
      </div>
      <div className="menu-section">
        <h2>Catering</h2>
        <div className="catering-menu">
          <div className="catering-option">
            <span>Chicken Wing Service:<p>$200</p></span>
            <img src='../../chickenwings.jpg' alt='Chicken Wings'/>
            <p>150 Chicken wings plus your choice of sauce, 3 sides, and 1 5-gallon keg of select beers</p>
            <a href="/CateringOption1">Click here to order</a>
          </div>
          <div className="catering-option">
            <span>Barbecue Service:<p>$250</p></span>
            <img src='../../bbq.jpg' alt='Barbecue'/>
            <p>3 Extra Large servings of your choice of our signature BBQ meats, 3 sauces, 3 sides, and 1 5-gallon keg of select beers</p>
            <a href="/CateringOption2">Click here to order</a>
          </div>
          <div className="catering-option">
            <span>Beer Service:<p>$300</p></span>
            <img src='../../kegs.jpg' alt='Kegs'/>
            <p>Your choice of 4 of our appetizers, plus two 5-gallon kegs of select beers</p>
            <a href="/CateringOption3">Click here to order</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catering;