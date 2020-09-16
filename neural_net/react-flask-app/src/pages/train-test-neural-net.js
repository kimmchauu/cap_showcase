import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import colorData from '../assets/data/colours.json'

// draws the circle and has the animation to gradually fill up from bottom - styling in _neural-network.scss
// pct = 0-100 (% of fill), color, size (e.g. 100)
const Circle = ({ pct, color, size }) => {
    const circle = {
      width: `${size}px`,
      height: `${size}px`
    };
  
    const circleFill = {
      background: `linear-gradient(transparent ${100 - pct}%, ${color} ${100 -
        pct}%)`
    };

    return (
      <div className="circle" style={circle}>
        <div className="circle-fill" style={circleFill} />
        <div className="circle-overlay" />
        <div className="circle-fill-text">{pct}%</div>
      </div>
    );
};


const Node = ({ color, size }) => {
    const circle = {
      width: `${size}px`,
      height: `${size}px`
    };
  
    const circleFill = {
      background: `${color}`,
    };

    return (
      <div className="draw-node" style={circle}>
        <div className="circle-fill" style={circleFill} />
      </div>
    );
};


function TestTrain() {
    const location = useLocation()
    const [coloursTaught, setColoursTaught] = useState(0)
    const [randomColour, setRandomColour] = useState()
    const [colourData, setColourData] = useState(colorData)
    const [selectedColour, setSelectedColour] = useState()

    const trainNeuralNet = () => {
        // TODO: conneect to backend
        setColoursTaught(coloursTaught + 100)
    }

    // TODO add logic in for when selecting a colour, then remove console
    useEffect(() => {
        console.log(selectedColour)

    }, [selectedColour]);

    // set selected colour here, but when you need anything to change when it changes do it above in useEffect
    const colorSelected = (colour) => {
        setSelectedColour(colour)
        //console.log(selectedColour)
    }

    // delete this after - shows how to access data needed
    //console.log("colour obj selected: ", location.state.colourSelected)
    // console.log("colour name: ", location.state.colourSelected.Name)
    // console.log("colour hex: ", location.state.colourSelected["Hex (24 bit)"])
    // console.log("colour red: ", location.state.colourSelected["Red (8 bit)"])
    // console.log("colour green: ", location.state.colourSelected["Green (8 bit)"])
    // console.log("colour blue: ", location.state.colourSelected["Blue (8 bit)"])
    //console.log("colour selected", selectedColour)

    const handleClick = () => {
        // get a random number and select from colour data, change this later if need be
        const min = 0;
        const max = 745;
        const rand = min + Math.random() * (max - min);
        const randomNum = ~~rand;
        // might ned to set rgba instead
        setRandomColour(colourData[randomNum]["Hex (24 bit)"])

        // sets the test button background color to random color everytime the clicks it
        document.getElementById("test-button").style.background = randomColour


        console.log("hidden layers: ", location.state.numHiddenLayers)
        console.log("nodes: ", location.state.numNodes)

        // TODO: change/set node weights
    }

    return (
        <div>
            <section className="container neural-network">
                <div className="row">
                    {/* <div className="colour-selected-div" style={{background: location.state.colourSelected["Hex (24 bit)"]}}>
                        <h1>Colour Selected: {location.state.colourSelected.Name}. Red - {location.state.colourSelected["Red (8 bit)"]}, Green: {location.state.colourSelected["Green (8 bit)"]} , Blue: {location.state.colourSelected["Blue (8 bit)"]} </h1>
                    </div> */}
                    <h1>Train and test the neural network</h1>

                    {/* Neural network visual - need to find how to draw shapes etc 
                            TODO: link this to backend - test button, node sizes, strength fills up,
                    */}
                    <div className="row">
                        {/* test circle: onClick change it to a random color */}
                        <div className="col-xs-2">
                            <button id="test-button" onClick={handleClick}>
                                <i className="glyphicon glyphicon-eye-open"></i>
                            </button>
                        </div>

                        {/* TODO: change size to node size change This is not the best way to do this but whatever */}
                        {/* 1 layer, 2 nodes */} 
                        {location.state.numHiddenLayers === 1 && location.state.numNodes === 2 &&
                        <div className="col-xs-8">
                            <div className="main-container">
                                <div className="layer-node-container">
                                    <Node size={100} color="white" /> 
                                    <Node size={100} color="white" /> 
                                </div>
                            </div>
                        </div>
                        }

                        {/* 2 layer, 2 nodes */} 
                        {location.state.numHiddenLayers === 2 && location.state.numNodes === 2 &&
                            <div>
                                <div className="col-xs-4">
                                    <div className="main-container">
                                        <div className="layer-node-container">
                                            <Node size={100} color="white" /> 
                                            <Node size={100} color="white" /> 
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-4">
                                    <div className="main-container">
                                        <div className="layer-node-container">
                                            <Node size={100} color="white" /> 
                                            <Node size={100} color="white" /> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }


                        {/* 3 layer, 2 nodes */} 
                        {location.state.numHiddenLayers === 3 && location.state.numNodes === 2 &&
                            <div>
                                <div className="col-xs-2">
                                    <div className="main-container">
                                        <div className="layer-node-container">
                                            <Node size={100} color="white" /> 
                                            <Node size={100} color="white" /> 
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-3">
                                    <div className="main-container">
                                        <div className="layer-node-container">
                                            <Node size={100} color="white" /> 
                                            <Node size={100} color="white" /> 
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-2">
                                    <div className="main-container">
                                        <div className="layer-node-container">
                                            <Node size={100} color="white" /> 
                                            <Node size={100} color="white" /> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }


                        {/* 1 layer, 3 nodes */} 
                        {location.state.numHiddenLayers === 1 && location.state.numNodes === 3 &&
                        <div className="col-xs-8">
                            <div className="main-container">
                                <div className="layer-node-container">
                                    <Node size={100} color="white" /> 
                                    <Node size={100} color="white" /> 
                                    <Node size={100} color="white" /> 
                                </div>
                            </div>
                        </div>
                        }


                        {/* 2 layer, 3 nodes */} 
                        {location.state.numHiddenLayers === 2 && location.state.numNodes === 3 &&
                            <div>
                                <div className="col-xs-4">
                                    <div className="main-container">
                                        <div className="layer-node-container">
                                            <Node size={100} color="white" /> 
                                            <Node size={100} color="white" /> 
                                            <Node size={100} color="white" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-4">
                                    <div className="main-container">
                                        <div className="layer-node-container">
                                            <Node size={100} color="white" /> 
                                            <Node size={100} color="white" /> 
                                            <Node size={100} color="white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }

                        {/* 3 layer, 3 nodes */} 
                        {location.state.numHiddenLayers === 3 && location.state.numNodes === 3 &&
                            <div>
                                <div className="col-xs-2">
                                    <div className="main-container">
                                        <div className="layer-node-container">
                                            <Node size={100} color="white" /> 
                                            <Node size={100} color="white" /> 
                                            <Node size={100} color="white" /> 
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-3">
                                    <div className="main-container">
                                        <div className="layer-node-container">
                                            <Node size={100} color="white" /> 
                                            <Node size={100} color="white" /> 
                                            <Node size={100} color="white" /> 
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-2">
                                    <div className="main-container">
                                        <div className="layer-node-container">
                                            <Node size={100} color="white" /> 
                                            <Node size={100} color="white" /> 
                                            <Node size={100} color="white" /> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }


                        {/* TODO: strength circle: pass in conf % to pct, change color to what it predicts it as? or leave as is with % */}
                        <div className="col-xs-2">
                            <Circle pct={20} size={100} color={"orange"} />
                        </div>
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
                    <div className="colours-taught-div">
                        <div className="colours-taught">
                            <p className="colours-taught-text">{coloursTaught} colours taught!</p>
                        </div>
                    </div>


                    <div className="select-colour-container">
                        <div className="row">
                            <h1>Test the neural network by selecting a colour ({colourData.length} colours)</h1>
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
                    </div>

                </div>
            </section>  
        </div>
    )
}

export default TestTrain;