import React, { useState } from "react";
import axios from "axios";

function CateringOption2() {
  const [option2, setOption2] = useState({
    beer: "",
    meat1: "",
    meat2: "",
    meat3: "",
    side1: "",
    side2: "",
    side3: "",
    name: ""
  });

  const option2Change = (propertyName, selectedValue) => {
    setOption2(prevState => ({
      ...prevState,
      [propertyName]: selectedValue
    }));
  };

  const orderItem2 = async (e) => {
    e.preventDefault();
    console.log("Option 2 Ordered");
    try {

      const $axios = await axios.post("http://localhost:2999/Catering", option2);
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
        <h2>Barbecue Service</h2>
        <form onSubmit={orderItem2} action="/Catering" method="post">
          <div class="form-group">
            <label for="beer">Select a beer</label>
            <select
              name="beer"
              id="beer"
              value={option2.beer}
              onChange={(e) => option2Change("beer", e.target.value)}
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
            <label for="meat1">Meat 1</label>
            <select
              name="meat1"
              id="meat1"
              value={option2.meat1}
              onChange={(e) => option2Change("meat1", e.target.value)}
              required
            >
              <option value="">-Select something-</option>
              <option value="chicken">Chicken</option>
              <option value="beef">Beef Brisket</option>
              <option value="ribs1">Beef Ribs</option>
              <option value="pork">Pulled Pork</option>
              <option value="ribs2">Pork Ribs</option>
            </select>
          </div>
          <div class="form-group">
            <label for="meat2">Meat 2</label>
            <select
              name="meat2"
              id="meat2"
              value={option2.meat2}
              onChange={(e) => option2Change("meat2", e.target.value)}
              required
            >
              <option value="">-Select something-</option>
              <option value="chicken">Chicken</option>
              <option value="beef">Beef Brisket</option>
              <option value="ribs1">Beef Ribs</option>
              <option value="pork">Pulled Pork</option>
              <option value="ribs2">Pork Ribs</option>
            </select>
          </div>
          <div class="form-group">
            <label for="meat3">Meat 3</label>
            <select
              name="meat3"
              id="meat3"
              value={option2.meat3}
              onChange={(e) => option2Change("meat3", e.target.value)}
              required
            >
              <option value="">-Select something-</option>
              <option value="chicken">Chicken</option>
              <option value="beef">Beef Brisket</option>
              <option value="ribs1">Beef Ribs</option>
              <option value="pork">Pulled Pork</option>
              <option value="ribs2">Pork Ribs</option>
            </select>
          </div>
          <div class="form-group">
            <label for="side1">Side 1</label>
            <select
              name="side1"
              id="side1"
              value={option2.side1}
              onChange={(e) => option2Change("side1", e.target.value)}
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
            <label for="side2">Side 2</label>
            <select
              name="side2"
              id="side2"
              value={option2.side2}
              onChange={(e) => option2Change("side2", e.target.value)}
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
            <label for="side3">Side 3</label>
            <select
              name="side3"
              id="side3"
              value={option2.side3}
              onChange={(e) => option2Change("side3", e.target.value)}
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
              value={option2.name}
              class="name-input" 
              placeholder="Enter your name" 
              onChange={(e) => option2Change("name", e.target.value)}
              required/>
          </div>
          <button type="submit">Click here to Order!</button>
        </form>
      </div>
    </div>
  );
}

export default CateringOption2;