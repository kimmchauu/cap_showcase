import React, { useState } from 'react'

import data from '../assets/data/colours.json'

function SelectAColour() {
    const [colourData, setColourData] = useState(data);

    // when import after use map() method we can loop all the items in the JSON file.
    // Map() method used only for the array but in our JSON file format is of object type [{}, {}]
    return (
        <>
            <section className="container neural-network">
                <div className="row">
                    <h1>Select a Colour ({colourData.length} colours)</h1>
                    {   
                        Object.values(colourData).map(colour => {
                        var color = colour["Hex (24 bit)"]
                        //document.getElementById("colour-button").style.backgroundColor = color;
                        return (
                            <div className="colour-container">
                                    <div className="col-xs-1">
                                        {/* Need to display the colours but also capture what colour was selected */}
                                        <button className="colour-button" style={{background: color}}></button>
                                    </div>
                                
                            </div> 
                        );
                        })
                    }
                </div>
            </section>
        </> 
    );
}

export default SelectAColour;