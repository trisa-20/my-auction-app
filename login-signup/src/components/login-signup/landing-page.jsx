import React from "react";
import "./landing-page.css";
import vintage_watch from '../assets/vintage_watch.jpg'
import antique_painting from '../assets/antique_painting.jpg'
import classic_car from '../assets/classic_car.jpg'

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Header Section */}
      <header className="header">
        <div className="logo">AuctionX</div>
        <nav>
          <ul>
            <li><a href="#">Sign Up</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Post Auction</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Discover, Bid, and Win Amazing Items</h1>
        <p>Join the best online auction platform and get exclusive deals.</p>
        <button className="cta-button">Start Bidding</button>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Sign Up</h3>
            <p>Create an account to start bidding.</p>
          </div>
          <div className="step">
            <h3>2. Browse Auctions</h3>
            <p>Find unique items from trusted sellers.</p>
          </div>
          <div className="step">
            <h3>3. Place Bids</h3>
            <p>Bid in real-time and win exclusive deals.</p>
          </div>
        </div>
      </section>

      {/* Featured Auctions */}
      <section className="featured-auctions">
        <h2>Featured Auctions</h2>
        <div className="auction-items">
          <div className="auction-item">
            <img src={vintage_watch} alt="Item 1" />
            <h3>Vintage Watch</h3>
            <p>Current Bid: $120</p>
          </div>
          <div className="auction-item">
            <img src={antique_painting} alt="Item 2" />
            <h3>Antique Painting</h3>
            <p>Current Bid: $250</p>
          </div>
          <div className="auction-item">
            <img src={classic_car} alt="Item 3" />
            <h3>Classic Car Model</h3>
            <p>Current Bid: $500</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 AuctionX. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
