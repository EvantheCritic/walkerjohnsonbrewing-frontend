import React from "react";
import '../Beer.css';
import { Link } from 'react-router-dom';

function Beer() {
    return (
        <div id="Beer">
            <div id="home-hero">
                <p>Enjoy a selection of our 12 craft beers and seasonal beers</p>
            </div>
            <div className="menu-section">
                <h2 className="menu-header">Beer Menu</h2>
                <div className="beer-menu">
                    <div className="menu-beer">
                        <h3>Tumbleweed Light Lager</h3>
                        <p>Our best selling craft beer! A crisp, refreshing, low-calorie light beer with notes of apple cider</p>
                        <p>$6</p>
                        <p>Saloon Glass: $8</p>
                        <ul class="beer-stats">
                            <li>Abv: 4.2%</li>
                            <li>Calories per pint: 130</li>
                            <li>Drinking Difficulty: Easy</li>
                        </ul>
                    </div>
                    <div className="menu-beer">
                        <h3>Carolina Kolsh</h3>
                        <p>Refreshing crisp German style ale. Pairs well with our famous pretzel</p>
                        <p>$7</p>
                        <p>Saloon Glass: $9</p>
                        <ul class="beer-stats">
                            <li>Abv: 4.6%</li>
                            <li>Calories per pint: 150</li>
                            <li>Drinking Difficulty: Easy</li>
                        </ul>
                    </div>
                    <div className="menu-beer">
                        <h3>Amber Ale</h3>
                        <p>An easy-drinking, malty amber ale with notes of maple and caramel</p>
                        <p>$7</p>
                        <p>Saloon Glass: $10</p>
                        <ul class="beer-stats">
                            <li>Abv: 4.8%</li>
                            <li>Calories per pint: 180</li>
                            <li>Drinking Difficulty: Easy</li>
                        </ul>
                    </div>
                    <div className="menu-beer">
                        <h3>Old Saloon Porter</h3>
                        <p>A malty, roasty-sweet dark beer with notes of dark chocolate and maple</p>
                        <p>$7</p>
                        <p>Saloon Glass: $10</p>
                        <ul class="beer-stats">
                            <li>Abv: 5.8%</li>
                            <li>Calories per pint: 220</li>
                            <li>Drinking Difficulty: Medium</li>
                        </ul>
                    </div>
                    <div className="menu-beer">
                        <h3>Bluegrass Wheat Ale</h3>
                        <p>A wheat ale with a slight citra hop bitterness and notes of lemon</p>
                        <p>$7</p>
                        <p>Saloon Glass: $10</p>
                        <ul class="beer-stats">
                            <li>Abv: 5.5%</li>
                            <li>Calories per pint: 200</li>
                            <li>Drinking Difficulty: Medium</li>
                        </ul>
                    </div>
                    <div className="menu-beer">
                        <h3>Indian land Pale Ale</h3>
                        <p>American Pale Ale with slight notes of Orange, Lemon, and Watermelon</p>
                        <p>Pint: $7</p>
                        <p>Saloon Glass: $10</p>
                        <ul class="beer-stats">
                            <li>Abv: 6%</li>
                            <li>Calories per pint: 230</li>
                            <li>Drinking Difficulty: Medium</li>
                        </ul>
                    </div>
                    <div className="menu-beer">
                        <h3>Lady Carolina Belgian Tripel</h3>
                        <p>Belgian Style ale with herbal finish and barleywine feel. Notes of honey and french vanilla.</p>
                        <p>Goblet: $10</p>
                        <ul class="beer-stats">
                            <li>Abv: 10.6%</li>
                            <li>Calories per goblet: 310</li>
                            <li>Drinking Difficulty: Medium</li>
                        </ul>
                    </div>
                    <div className="menu-beer">
                        <h3>India Pale Ale</h3>
                        <p>Our best selling IPA! Crisp and bitter IPA with a blend of Chinook, Amarillo, Cascade, and Citra Hops</p>
                        <p>Pint: $8</p>
                        <p>Saloon Glass: $12</p>
                        <ul class="beer-stats">
                            <li>Abv: 7%</li>
                            <li>Calories per pint: 260</li>
                            <li>Drinking Difficulty: Hard</li>
                        </ul>
                    </div>
                    <div className="menu-beer">
                        <h3>Werewolf Hazy IPA</h3>
                        <p>New England Style IPA with fruity aroma and notes of mango, pineapple, and watermelon</p>
                        <p>Pint: $8</p>
                        <p>Saloon Glass: $12</p>
                        <ul class="beer-stats">
                            <li>Abv: 6.7%</li>
                            <li>Calories per pint: 260</li>
                            <li>Drinking Difficulty: Medium</li>
                        </ul>
                    </div>
                    <div className="menu-beer">
                        <h3>Saloon Fight Strong Ale</h3>
                        <p>Heavy red ale with bitter finish and strong notes of maple and  brown sugar. Slight notes of orange zest, and cookie dough</p>
                        <p>Pint: $9</p>
                        <p>Saloon Glass: $12</p>
                        <ul class="beer-stats">
                            <li>Abv: 7.6%</li>
                            <li>Calories per pint: 290</li>
                            <li>Drinking Difficulty: Hard</li>
                        </ul>
                    </div>
                    <div className="menu-beer">
                        <h3>Minotaur Imperial Stout</h3>
                        <p>Dark and very malty Stout. Notes of Dark chocolate, Black Licorice, and Bourbon</p>
                        <p>Goblet: $10</p>
                        <ul class="beer-stats">
                            <li>Abv: 9.4%</li>
                            <li>Calories per goblet: 270</li>
                            <li>Drinking Difficulty: Hard</li>
                        </ul>
                    </div>
                    <div className="menu-beer">
                        <h3>Double Barrel IPA</h3>
                        <p>Heavy, Bitter, and very malty. Heavy on hops. Drink with care.</p>
                        <p>Goblet: $9</p>
                        <ul class="beer-stats">
                            <li>Abv: 9.1%</li>
                            <li>Calories per goblet: 270</li>
                            <li>Drinking Difficulty: Very Hard</li>
                        </ul>
                    </div>
                </div>
                <h2 className="menu-header">Flight <p>Choose any 4 5oz beer samplers: $12</p></h2>
            </div>
        </div>
    );
}

export default Beer;