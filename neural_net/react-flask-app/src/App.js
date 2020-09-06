import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import Navigation from './components/navigation'
import PageRenderer from '../src/PageRenderer'


function App() {

  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Switch>
          {/* PageRenderer will be able to render any dynamic page inside of this, without having to maintain links */}
          <Route path="/:page" component={PageRenderer}/>
          {/* Redirects landing path to /home */}
          <Route path="/" render={() => <Redirect to ="/home"/>}/>
          {/* If route doesn't exist, render 404 */}
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
