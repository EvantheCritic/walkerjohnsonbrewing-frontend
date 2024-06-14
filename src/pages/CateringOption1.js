import React, { useState } from "react";
import axios from "axios";

function CateringOption1() {
  const [option1, setOption1] = useState({
    beer: "",
    sauce: "",
    side1: "",
    side2: "",
    side3: "",
    name: ""
  });

  const option1Change = (propertyName, selectedValue) => {
    setOption1(prevState => ({
      ...prevState,
      [propertyName]: selectedValue
    }));
  };

  const orderItem1 = async (e) => {
    e.preventDefault();
    console.log("Option 1 Ordered");
    try {
      const $axios = await axios.post("http://localhost:2999/Catering", option1);
      alert("Your Order has been placed!");
      window.location.href = '/';
      console.log('Sucessfully Ordered:', $axios.data);
    } 
    catch (error) {
      console.error('Error placing order:', error);  
    }
  };

  return (
    <div id="Catering">
      <div id="food-hero">
        <p>Please customize your catering service below.</p>
      </div>
      <div className="menu-section">
        <h2>Chicken Wing Service</h2>
        <form onSubmit={orderItem1} action="/Catering" method="post">
          <div class="form-group">
            <label for="beer">Select a beer</label>
            <select
              name="beer"
              id="beer"
              value={option1.beer}
              onChange={(e) => option1Change("beer", e.target.value)}
              required
            >
                <option value="">-Select something-</option>
                <option value="tumbleweed">Tumbleweed Light Lager</option>
                <option value="carolina">Carolina Kolsch</option>
                <option value="amber">Amber Ale</option>
                <option value="porter">Old Saloon Porter</option>
                <option value="bluegrass">Bluegrass Wheat Ale</option>
                <option value="indian">Indian Land Pale Ale</option>
                <option value="ipa">India Pale Ale</option>
                <option value="werewolf">Werewolf Hazy IPA</option>
                <option value="saloon">Saloon Fight Strong Ale</option>
            </select>
          </div>
          <div class="form-group">
            <label for="sauce">Choose a sauce</label>
            <select
              name="sauce"
              id="sauce"
              value={option1.sauce}
              onChange={(e) => option1Change("sauce", e.target.value)}
              required
            >
              <option value="">-Select something-</option>
              <option value="hot">Hot sauce</option>
              <option value="chipotle">Chipotle</option>
              <option value="maple">Maple BBQ</option>
              <option value="honey">Honey BBQ</option>
              <option value="mustard">Honey mustard</option>
              <option value="dynamite">Dynamite sauce</option>
              <option value="jerk">Jerk sauce</option>
            </select>
          </div>
          <div class="form-group">
            <label for="side1">Side 1</label>
            <select
              name="side1"
              id="side1"
              value={option1.side1}
              onChange={(e) => option1Change("side1", e.target.value)}
              required
            >
              <option value="">-Select something-</option>
              <option value="fries">French Fries</option>
              <option value="beans">Cajun style beans</option>
              <option value="mash">Mashed Potatoes</option>
              <option value="mac">Mac N Cheese</option>
              <option value="green">Green Beans</option>
              <option value="brussels">Brussels Sprouts</option>
              <option value="horse">Signature horse hay</option>
            </select>
          </div>
          <div class="form-group">
            <label for="side2">Side2 </label>
            <select
              name="side2"
              id="side2"
              value={option1.side2}
              onChange={(e) => option1Change("side2", e.target.value)}
              required
            >
              <option value="">-Select something-</option>
              <option value="fries">French Fries</option>
              <option value="beans">Cajun style beans</option>
              <option value="mash">Mashed Potatoes</option>
              <option value="mac">Mac N Cheese</option>
              <option value="green">Green Beans</option>
              <option value="brussels">Brussels Sprouts</option>
              <option value="horse">Signature horse hay</option>
            </select>
          </div>
          <div class="form-group">
            <label for="side3">Side3 </label>
            <select
              name="side3"
              id="side3"
              value={option1.side3}
              onChange={(e) => option1Change("side3", e.target.value)}
              required
            >
              <option value="">-Select something-</option>
              <option value="fries">French Fries</option>
              <option value="beans">Cajun style beans</option>
              <option value="mash">Mashed Potatoes</option>
              <option value="mac">Mac N Cheese</option>
              <option value="green">Green Beans</option>
              <option value="brussels">Brussels Sprouts</option>
              <option value="horse">Signature horse hay</option>
            </select>
          </div>
          <div class="form-group">
            <label for="name">Order Name</label>
            <input 
              type="text" 
              id="name" 
              value={option1.name}
              class="name-input" 
              placeholder="Enter your name" 
              onChange={(e) => option1Change("name", e.target.value)}
              required/>
          </div>
          <button type="submit">Click here to Order!</button>
        </form>
      </div>
    </div>
  );
}

export default CateringOption1;