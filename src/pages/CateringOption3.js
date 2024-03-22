import React, { useState } from "react";
import axios from "axios";

function CateringOption3() {
  const [option3, setOption3] = useState({
    beer1: "",
    beer2: "",
    snack1: "",
    snack2: "",
    snack3: "",
    snack4: "",
    name: ""
  });

  const option3Change = (propertyName, selectedValue) => {
    setOption3(prevState => ({
      ...prevState,
      [propertyName]: selectedValue
    }));
  };

  const orderItem3 = async (e) => {
    e.preventDefault();
    console.log("Option 3 Ordered");
    try {

      const $axios = await axios.post("https://walkerjohnsonbrewing-server-fd63de77b2c7.herokuapp.com/Catering", option3);
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
        <h2>Beer Service</h2>
        <form onSubmit={orderItem3} action="/Catering" method="post">
          <div class="form-group">
            <label for="beer1">Select first beer</label>
            <select
              name="beer1"
              id="beer1"
              value={option3.beer1}
              onChange={(e) => option3Change("beer1", e.target.value)}
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
          <label for="beer2">Select second beer</label>
            <select
              name="beer2"
              id="beer2"
              value={option3.beer2}
              onChange={(e) => option3Change("beer2", e.target.value)}
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
            <label for="snack1">Snack 1</label>
            <select
              name="snack1"
              id="snack1"
              value={option3.snack1}
              onChange={(e) => option3Change("snack1", e.target.value)}
              required
            >
              <option value="">-Select something-</option>
              <option value="pretzel">Signature Bavarian Pretzel</option>
              <option value="chicken">Honey BBQ Chicken Wings</option>
              <option value="artichoke">Artichoke Dip</option>
              <option value="sticks">Mozzarella Sticks</option>
              <option value="pork">Onion Rings</option>
              <option value="ceasar">Ceasar Salad</option>
              <option value="garden">Garden Salad</option>
            </select>
          </div>
          <div class="form-group">
            <label for="snack2">Snack 2</label>
            <select
              name="snack2"
              id="snack2"
              value={option3.snack2}
              onChange={(e) => option3Change("snack2", e.target.value)}
              required
            >
              <option value="">-Select something-</option>
              <option value="pretzel">Signature Bavarian Pretzel</option>
              <option value="chicken">Honey BBQ Chicken Wings</option>
              <option value="artichoke">Artichoke Dip</option>
              <option value="sticks">Mozzarella Sticks</option>
              <option value="pork">Onion Rings</option>
              <option value="ceasar">Ceasar Salad</option>
              <option value="garden">Garden Salad</option>
            </select>
          </div>
          <div class="form-group">
            <label for="snack3">Snack 3</label>
            <select
              name="snack3"
              id="snack3"
              value={option3.snack3}
              onChange={(e) => option3Change("snack3", e.target.value)}
              required
            >
              <option value="">-Select something-</option>
              <option value="pretzel">Signature Bavarian Pretzel</option>
              <option value="chicken">Honey BBQ Chicken Wings</option>
              <option value="artichoke">Artichoke Dip</option>
              <option value="sticks">Mozzarella Sticks</option>
              <option value="pork">Onion Rings</option>
              <option value="ceasar">Ceasar Salad</option>
              <option value="garden">Garden Salad</option>
            </select>
          </div>
          <div class="form-group">
            <label for="snack4">Snack 4</label>
            <select
              name="snack4"
              id="snack4"
              value={option3.snack4}
              onChange={(e) => option3Change("snack4", e.target.value)}
              required
            >
              <option value="">-Select something-</option>
              <option value="pretzel">Signature Bavarian Pretzel</option>
              <option value="chicken">Honey BBQ Chicken Wings</option>
              <option value="artichoke">Artichoke Dip</option>
              <option value="sticks">Mozzarella Sticks</option>
              <option value="pork">Onion Rings</option>
              <option value="ceasar">Ceasar Salad</option>
              <option value="garden">Garden Salad</option>
            </select>
          </div>
          <div class="form-group">
            <label for="name">Order Name</label>
            <input 
              type="text" 
              id="name" 
              value={option3.name}
              class="name-input" 
              placeholder="Enter your name" 
              onChange={(e) => option3Change("name", e.target.value)}
              required/>
          </div>
          <button type="submit">Click here to Order!</button>
        </form>
      </div>
    </div>
  );
}

export default CateringOption3;