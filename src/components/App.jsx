import React from 'react';
import { Switch, Route } from 'react';
import { v4 } from 'uuid';

import Header from './Header';
import GoodOwner from './GoodOwner';
import StatusControl from './StatusControl';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      currentOverallHealth: {},
    };
    this.handleChangingOverallHealth = this.handleChangingOverallHealth.bind(this);
  }

  handleChangingOverallHealth(newAction) {
    var newActionId = v4();
    var newCurrentOverallHealth = Object.assign({}, this.state.currentOverallHealth, { [newActionId]: newAction
    });
    // Update time effects below this comment.//
    newCurrentOverallHealth[newActionId];
    this.setState({currentOverallHealth: newCurrentOverallHealth});
  }

  handleChangingHungerHealth() {

  }

  handleChangingRestHealth() {

  }

  handleChangingAttentionHealth() {

  }

  render(){
    return(
      <div>
        <h1>This is the app component</h1>
        <Header/>
        <Switch>
          <Route path='/' render={()=><GoodOwner currentHealth={this.state.currentOverallHealth}/>}/>
          <Route path='/' render={()=><StatusControl onNewAction={this.handleChangingOverallHealth}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;