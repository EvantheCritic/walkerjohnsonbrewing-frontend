import React from "react";
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
                    <div className="food-family">
                        <h3>Sandwiches</h3>
                        <div className="menu-food">
                            <span>Walker Johnson Maple Chicken Sandwich:<p>$17</p></span>
                            <p>Our signature chicken sandwich served with lettuce, tomato, onion, pickles, and our signature maple BBQ sauce.</p>
                        </div>
                        <div className="menu-food">
                            <span>Nashville hot chicken sandwich:<p>$18</p></span>
                            <p>Chicken sandwich made with our Dynamite sauce  served with lettuce, tomato, onion, and pickles.</p>
                        </div>
                        <div className="menu-food">
                            <span>Philly Cheesesteak:<p>$20</p></span>
                            <p>10 inch steak and chicken sandwich with choice of American, pepperjack, cheddar or swiss cheese. Served with peppers, onions, and mushrooms</p>
                        </div>
                        <div className="menu-food">
                            <span>Pulled Pork Sandwich:<p>$22</p></span>
                            <p>1/2 lb Barbecue pulled pork sandwich served with maple BBQ sauce, onion rings, and coleslaw.</p>
                        </div>
                        <div className="menu-food">
                            <span>BLT Sandwich:<p>$15</p></span>
                            <p>Sandwich with bacon, lettuce, tomato, and thousand island dressing.</p>
                        </div>
                        <div className="menu-food">
                            <span>Walker Johnson Club Sandwich:<p>$17</p></span>
                            <p>Sandwich with turkey, bacon, lettuce, tomato, and mayonnaise, served triple-decker style.</p>
                        </div>
                    </div>
                    <div className="food-family">
                        <h3>Barbecue</h3>
                        <div className="menu-food">
                            <span>Junior BBQ plate:<p>$16</p></span>
                            <p>Choice of 1 meat, 1 side, and cornbread or roll.</p>
                        </div>
                        <div className="menu-food">
                            <span>BBQ plate:<p>$20</p></span>
                            <p>Choice of 2 meats, 2 sides, and cornbread or roll.</p>
                        </div>
                        <div className="menu-food">
                            <span>Big BBQ plate:<p>$24</p></span>
                            <p>Choice of 3 meats, 3 sides, and cornbread or roll.</p>
                        </div>
                        <h3>Meats</h3>
                        <p><strong>Chicken</strong></p>
                        <p><strong>Beef Ribs</strong></p>
                        <p><strong>Beef Brisket</strong></p>
                        <p><strong>Pork Ribs</strong></p>
                        <p><strong>Pulled Pork</strong></p>
                        <h3>Sides</h3>
                        <p><strong>French Fries</strong></p>
                        <p><strong>Cajun style beans</strong></p>
                        <p><strong>Mashed Potatoes</strong></p>
                        <p><strong>Mac N Cheese</strong></p>
                        <p><strong>Brussels Sprouts</strong></p>
                        <p><strong>Green Beans</strong></p>
                        <p><strong>Horse Hey:</strong><br />1-inch long aldente spaghetti fried with cajun seasoning</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Food;