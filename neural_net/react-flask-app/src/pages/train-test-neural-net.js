import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

function TestTrain() {
    const location = useLocation(); 
    const [coloursTaught, setColoursTaught] = useState(0);

    const trainNeuralNet = () => {
        setColoursTaught(coloursTaught + 100);
    }

    // delete this after - shows how to access data needed
    //console.log("colour obj selected: ", location.state.colourSelected)
    console.log("colour name: ", location.state.colourSelected.Name)
    console.log("colour hex: ", location.state.colourSelected["Hex (24 bit)"])
    console.log("colour red: ", location.state.colourSelected["Red (8 bit)"])
    console.log("colour green: ", location.state.colourSelected["Green (8 bit)"])
    console.log("colour blue: ", location.state.colourSelected["Blue (8 bit)"])
    console.log("hidden layers: ", location.state.numHiddenLayers)
    console.log("nodes: ", location.state.numNodes)

    return (
        <div>
            <section className="container neural-network">
                <div className="row">
                    <div className="colour-selected-div" style={{background: location.state.colourSelected["Hex (24 bit)"]}}>
                        <h1>Colour Selected: {location.state.colourSelected.Name}. Red - {location.state.colourSelected["Red (8 bit)"]}, Green: {location.state.colourSelected["Green (8 bit)"]} , Blue: {location.state.colourSelected["Blue (8 bit)"]} </h1>
                    </div>
                    <h1>Train and test the neural network</h1>

                    {/* Neural network visual - need to find how to draw shapes etc 
                            TODO: link this to backend - test button, node sizes, strength fills up,
                    */}
                    <div className="row">
                        <p>This will be there neural net visual, has test functionality, shows nodes, shows strength (conf)</p>
                    </div>

                     {/* Train button 
                            TODO: link this backend
                     */}
                     <div className="train-button-container">
                        <button className="train-button" onClick={trainNeuralNet}>
                            <i className="glyphicon glyphicon-cog"></i> Train
                        </button>
                    </div>

                    {/* x Colours taught
                            TODO: link this backend, also add visuals if have time
                     */}
                    <div className="row">
                        <div className="colours-taught">
                            <p className="colours-taught-text">{coloursTaught} colours taught!</p>
                        </div>
                    </div>

                </div>
            </section>  
        </div>
    )
}

export default TestTrain;