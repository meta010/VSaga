import React from 'react';
import '../Styles/Pagenotfound.css';

const Pagenotfound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-text">Oops! The page you're looking for doesn't exist.</p>
        {/* <img className="not-found-image" src="404-image.png" alt="404 Error" /> */}
        <a href="/" className="not-found-link">Go back to Home</a>
      </div>
    </div>
  );
}

export default Pagenotfound;
