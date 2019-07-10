import React from 'react';
import PropTypes from 'prop-types';

import Health from './Health';

function GoodOwner(props) {
  return(
    <div>
      {Object.keys(props.currentHealth).map(function(actionId){
        var action = props.currentHealth[actionId];
        return <Health hunger={action.hunger}
          rest={action.rest}
          attention={action.attention}
          key={actionId}
          actionId={actionId}/>;
      })}
    </div>
  );
}

GoodOwner.propTypes = {
  currentHealth: PropTypes.object
};

export default GoodOwner;