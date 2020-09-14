import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import data from '../assets/data/colours.json'

function SelectAColour() {
    const [colourData] = useState(data);
    // can use ,setColourData if need in future (removed so there's no warning)

    const history = useHistory();

    const colorSelected = (colour) => {
        // shows the correct colour has been selected and data captured
        //console.log("colour obj selected: ", colour)

        // go to select neural net size page
        history.push({
            pathname: '/select-neural-net-size',
            state: { colourSelected: colour}
       })
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