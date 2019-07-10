import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <div>
      <h2>Tamagotchi</h2>
      <button onClick={props.onHandleHungerMood}>Feed</button>| 
      <button onClick={props.onHandleSleepyMood}>Rest</button> 
      <button onClick={props.onHandleLonelyMood}>Play</button>
    </div>
  );
}

Header.propTypes = {
  onHandleHungerMood:PropTypes.func,
  onHandleLonelyMood: PropTypes.func,
  onHandleSleepyMood: PropTypes.func
};

export default Header;