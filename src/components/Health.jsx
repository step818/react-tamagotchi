import React from 'react';
import PropTypes from 'prop-types';

function Health() {
  return(
    <div>
      <h2>health</h2>
    </div>
  );
}

Health.propTypes = {
  hunger: PropTypes.string.isRequired,
  rest: PropTypes.string.isRequired,
  attention: PropTypes.string.isRequired,
  actionId: PropTypes.string.isRequired
};

export default Health;