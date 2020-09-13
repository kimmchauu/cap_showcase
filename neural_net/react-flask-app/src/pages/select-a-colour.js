import React, { useState } from 'react'

import data from '../assets/data/colours.json'

function SelectAColour() {
    const [colourData, setColourData] = useState(data);
    const [colourSelected, setColourSelected] = useState();

    function colorSelected(colour) {
        // shows the correct colour has been selected and data captured
        console.log("colour obj selected: ", colour)
        console.log("colour name: ", colour.Name)
        console.log("colour hex: ", colour["Hex (24 bit)"])
        console.log("colour red: ", colour["Red (8 bit)"])
        console.log("colour green: ", colour["Green (8 bit)"])
        console.log("colour blue: ", colour["Blue (8 bit)"])

        // now change use colourSelected to pass to other components if need be
        setColourSelected(colour)
    }
    

    // when import after use map() method we can loop all the items in the JSON file.
    // Map() method used only for the array but in our JSON file format is of object type [{}, {}]
    return (
        <>
            <section className="container neural-network">
                <div className="row">
                    <h1>Select a Colour ({colourData.length} colours)</h1>
                    {   
                        Object.values(colourData).map(colour => {
                        //document.getElementById("colour-button").style.backgroundColor = color;
                        return (
                            <div className="colour-container">
                                    <div className="col-xs-1">
                                        {/* Need to display the colours but also capture what colour was selected */}
                                        <button className="colour-button" style={{background: colour["Hex (24 bit)"]}} onClick={() => colorSelected(colour)}></button>
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