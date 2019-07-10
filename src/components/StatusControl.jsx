import React from 'react';
import FullStatus from './FullStatus';
import HungryStatus from './HungryStatus';
import SleepyStatus from './SleepyStatus';
import LonelyStatus from './LonelyStatus';
import ExtinctStatus from './ExtinctStatus';

class StatusControl extends React{

  constructor(props) {
    super(props);
    this.state = {
      fullStatusVisible: true,
      hungryStatusVisible: false,
      sleepyStatusVisible: false,
      lonelyStatusVisible: false,
    };
  }

  handleHungerMood(){
    this.setState({hungryStatusVisible: true});
  }

  handleSleepyMood(){
    this.setState({sleepyStatusVisible: true});
  }

  handleLonelyMood(){
    this.setState({lonelyStatusVisible: true});
  }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.fullStatusVisible){
      currentlyVisibleContent = <FullStatus/>;
    } else if (this.state.hungryStatusVisible){
      currentlyVisibleContent = <HungryStatus/>;
    } else if (this.state.sleepyStatusVisible){
      currentlyVisibleContent = <SleepyStatus/>;
    } else if (this.state.lonelyStatusVisible){
      currentlyVisibleContent = <LonelyStatus/>;
    } else {
      currentlyVisibleContent = <ExtinctStatus/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

export default StatusControl;