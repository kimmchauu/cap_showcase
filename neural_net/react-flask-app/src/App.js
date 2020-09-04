import React, {useState, useEffect} from 'react';

import logo from './logo.svg';
import './App.css';



function App() {
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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/*Renders in the front end here, shows the current time which is taken from fast api backend */}
        <p>The current time is {currentTime}</p>
      </header>
    </div>
  );
}

export default App;
