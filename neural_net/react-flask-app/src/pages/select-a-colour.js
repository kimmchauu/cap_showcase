import React, { useState } from 'react'

import data from '../assets/data/colours.json'

function SelectAColour() {
    const [colourData, setColourData] = useState(data);

    // when import after use map() method we can loop all the items in the JSON file.
    // Map() method used only for the array but in our JSON file format is of object type [{}, {}]
    console.log(colourData[0].Name)
    return (
        <>
            <section className="container neural-network">
                <div className="row">
                    <h1>Select a Colour</h1>
                    {   
                        Object.values(colourData).map(colour => {
                        return (
                            <div>
                            
                                {/* Need to display the colours but also capture what colour was selected */}
                                <p>{colour.Name}</p>
                                    
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