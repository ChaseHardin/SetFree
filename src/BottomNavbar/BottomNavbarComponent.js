import React from 'react';
import { Link } from 'react-router-dom'
import './BottomNavbarComponent.css';

const BottomNavBarComponent = () => {
    return (
          <nav className='navbar navbar-dark bg-dark fixed-bottom'>
            <Link to="/" className="home-route nav-item nav-link">Home</Link>
            <Link to="/score" className="score-route nav-item nav-link">Score</Link>
            <Link to="/score" className="score-route nav-item nav-link">Score</Link>
        </nav>
    )
}

export default BottomNavBarComponent;