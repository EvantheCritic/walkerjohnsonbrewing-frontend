import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

function mapReviews(value) {
    return (
      <div className="review">
        <p class="bold">{ value.name }</p>
        <p>{ value.rating } stars</p>
        <p>{ value.review }</p>
      </div>
    );
}

function Home() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:2999").then((result) => {
            console.log(result);
            setReviews(result.data);
        });
    }, []);
    return (
        <div className="Home">
            <div id="home-hero">
                <p>Come visit our restaurant and brewery for a yee-haw time!</p>
            </div>
            <p className="alert">Note: Catering and Jobs pages are not available yet</p>
            <nav>
                <Link to="/Beer" style={{ textDecoration: 'none' }}>
                <div className="nav-pill">
                    <p>Beer Menu</p>
                </div>
                </Link>
                
                <Link to="/Food" style={{ textDecoration: 'none' }}>
                <div className="nav-pill">
                    <p>Food Menu</p>
                </div>
                </Link>
                <Link to="/Catering" style={{ textDecoration: 'none' }}>
                <div className="nav-pill">
                    <p>Catering</p>
                </div>
                </Link>

                <Link to="/Jobs" style={{ textDecoration: 'none' }}>
                <div className="nav-pill">
                    <p>Jobs</p>
                </div>
                </Link>
            </nav>
            <div id="review-list">
                <h2>Reviews</h2>
                <Link to="/WriteReview" id="writeReviewBtn">
                    Write a Review
                </Link>
                <div id="reviews">
                    {reviews.map(mapReviews)}
                </div>
            </div>
        </div>
        );  
}

export default Home;