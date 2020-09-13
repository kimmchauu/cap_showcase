import React from 'react'
import { useLocation } from 'react-router-dom'


function SelectNeuralNetSize(props) {
    // need this to get data from previous page
    const location = useLocation(); 

    // delete this after - shows how to access data needed
    // console.log("colour obj selected: ", location.state.colourSelected)
    // console.log("colour name: ", location.state.colourSelected.Name)
    // console.log("colour hex: ", location.state.colourSelected["Hex (24 bit)"])
    // console.log("colour red: ", location.state.colourSelected["Red (8 bit)"])
    // console.log("colour green: ", location.state.colourSelected["Green (8 bit)"])
    // console.log("colour blue: ", location.state.colourSelected["Blue (8 bit)"])

    return (
        <div>
            <section className="container neural-network">
                <div className="row">
                    <h1>Select a Neural Network Size</h1>
                    {/* Shows you the name of the colour that was selected from previous page */}
                    <p>{location.state.colourSelected.Name}</p>
                </div>
            </section>  
        </div>
    )
}

export default SelectNeuralNetSize;