import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import Navigation from './components/navigation'


function App() {
  /* 
  //can now use {currentTime} anywhere in html code
  const[currentTime, setCurrentTime] = useState(0);

  // function that is invoked when page is render, empty list means no dependencies, so it stops it from changing evrytime the time changes
  useEffect(() => {
      // get api call using fetch
      // get response, convert to json, then get data
      fetch('/time').then(res => res.json()).then(data => {
          // logic here
          // format of object was key and value (time)
          setCurrentTime(data.time);
      });
  }, []);
  */

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
