import React from "react";
import '../Food.css';
import { Link } from 'react-router-dom';

function Food() {
    return (
        <div id="Food">
            <div id="food-hero">
                <p>From a good ol' burger, to our signature maple smoked barbecue. We got it all to satisfy your cravings!</p>
            </div>
            <div className="menu-section">
                <h2 className="menu-header">Food Menu</h2>
                <div className="food-menu">
                    <div className="food-family">
                        <h3>Appetizers</h3>
                        <div className="menu-food">
                            <span>Walker Johnson BBQ chicken wings:<p>$10</p></span>
                            <p>Chicken wings coated in your choice of honey BBQ sauce or spicy Buffalo sauce, served with celery sticks and blue cheese dressing.</p>
                        </div>
                        <div className="menu-food">
                            <span>Signature Bavarian Pretzel:<p>$8</p></span>
                            <p>Our signature Bavarian Pretzel. Served with your choice of mustard sauce or cheddar cheese sauce.</p>
                        </div>
                        <div className="menu-food">
                            <span>Artichoke Dip:<p>$11</p></span>
                            <p>Creamy dip made with artichokes and cheese, served with tortilla chips or bread.</p>
                        </div>
                        <div className="menu-food">
                            <span>Mozzarella Sticks:<p>$10</p></span>
                            <p>Fried mozzarella cheese sticks served with marinara sauce.</p>
                        </div>
                        <div className="menu-food">
                            <span>Onion Rings:<p>$12</p></span>
                            <p>Thick slices of onions coated in batter and deep-fried until crispy.</p>
                        </div>
                        <div className="menu-food">
                            <span>Quesadillas:<p>$12</p></span>
                            <p>Flour tortillas filled with cheese, served with salsa and sour cream. Add chicken or beef for $2</p>
                        </div>
                    </div>
                    <div className="food-family">
                        <h3>Burgers</h3>
                        <div className="menu-food">
                            <span>Walker Johnson Burger:<p>$14</p></span>
                            <p>1/3lb Angus beef patty with, lettuce, tomato, onion, pickles, and ketchup on a sesame seed bun. Add Cheese for $1</p>
                        </div>
                        <div className="menu-food">
                            <span>Cowboy Burger:<p>$18</p></span>
                            <p>Cheeseburger with onion rings, barbecue sauce, and maple smoked bacon.</p>
                        </div>
                        <div className="menu-food">
                            <span>Horse's Burger:<p>$16</p></span>
                            <p>Vegetarian burger made from black beans and quinoa, topped with fresh veggies, avocado spread, and yogurt dressing on a soft whole-grain bun.</p>
                        </div>
                        <div className="menu-food">
                            <span>Aztec Burger:<p>$18</p></span>
                            <p>Cheeseburger topped with your choice of Guacamole or sliced avocado, bacon, lettuce, and tomato.</p>
                        </div>
                        <div className="menu-food">
                            <span>Aloha Burger:<p>$16</p></span>
                            <p>Beef patty glazed with teriyaki sauce, topped with pineapple and lettuce.</p>
                        </div>
                        <div className="menu-food">
                            <span>Angry bull's Burger:<p>$18</p></span>
                            <p>Cheeseburger with jalapeños, pepper jack cheese, and chipotle mayo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Food;