import React, {useState, useEffect} from 'react';


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
    <div className="App">

    </div>
  );
}

export default App;
