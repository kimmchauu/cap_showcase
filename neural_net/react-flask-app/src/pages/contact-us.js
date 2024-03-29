import React, {useState, useEffect} from 'react'

function ContactUs() {
    //can now use {currentTime} anywhere in html code - REMOVE THIS LATER this just shows how we can use flask and react
    const[currentTime, setCurrentTime] = useState(0);

    // function that is invoked when page is render, empty list means no dependencies, so it stops it from changing evrytime the time changes
    useEffect(() => {
        // get api call using fetch
        // get response, convert to json, then get data
        fetch('/time').then(res => res.json()).then(data => {
            // logic here
            // format of object was key and value (time)
            // make sure it's data.time not just data
            setCurrentTime(data.time);
        });
    }, []);

    return (
        <div>
            <section className="container">
                <div className="row">
                    <h1>Contact Us</h1>
                    {/* Need to build this out - won't take long, or remove this entirely*/}
                    <p>The current time is {currentTime}</p>
                </div>
            </section>  
        </div>
        
    )
}

export default ContactUs;