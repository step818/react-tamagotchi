import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h2>Tamagotchi</h2>
      <Link to="/">Feed</Link> | 
      <Link to="/">Play</Link> | 
      <Link to="/">Sleep</Link>
    </div>
  );
}

export default Header;