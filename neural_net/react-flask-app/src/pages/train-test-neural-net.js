import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';

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
    const [randomColour, setRandomColour] = useState()
    const [colourData, setColourData] = useState(colorData)
    const [modelTrainedText, setModelTrainedText] = useState("Click the train button to train the model")

    const [selectedColour, setSelectedColour] = useState()
    const [colourName, setColourName] = useState("no colour selected")
    const [colourHex, setColourHex] = useState()
    const [colourRedValue, setColourRedValue] = useState()
    const [colourGreenValue, setColourGreenValue] = useState()
    const [colourBlueValue, setColourBlueValue] = useState()

    const [predictionClassNum, setPredictionClassNum] = useState()
    const [predictedColour, setPredictedColour] = useState("white")
    const rainbowColours = ["#9400D3","#4B0082", "#0000FF", "#00FF00", "#FFFF00", "#FF7F00", "#FF0000" ]

    const trainNeuralNet = () => {
        // TODO: conneect to backend
        setModelTrainedText("Model trained!")
    }

    // TODO add logic in for when selecting a colour, then remove console
    useEffect(() => {
        console.log(selectedColour)
        console.log(colourName)
        console.log(colourHex)
        console.log(colourRedValue)
        console.log(colourGreenValue)
        console.log(colourBlueValue)

        // set test button colour to selected colour
        document.getElementById("test-button").style.background = colourHex

    }, [selectedColour, colourName, colourHex, colourRedValue, colourGreenValue, colourBlueValue]);

    // set selected colour here, but when you need anything to change when it changes do it above in useEffect
    const colorSelected = (colour) => {
        setSelectedColour(colour)
        //console.log(selectedColour)
        setColourName(colour.Name)
        setColourHex(colour["Hex (24 bit)"])
        setColourRedValue(colour["Red (8 bit)"])
        setColourGreenValue(colour["Green (8 bit)"])
        setColourBlueValue(colour["Blue (8 bit)"])
    }

    // this triggers everytime predictionClassNum changes, which means everytime we predict
    useEffect(() => {
        console.log("~~~~~", predictionClassNum)
        // convert predictionClassNum from str to int
        var predictClassNum = parseInt(predictionClassNum)
        // set predictedColour to rainbowColours[predictionClassNum] so we get the predicted colour (out of the 7)
        setPredictedColour(rainbowColours[predictClassNum])
    }, [predictionClassNum]);

    const handleClick = () => {

        console.log("hidden layers: ", location.state.numHiddenLayers)
        console.log("nodes: ", location.state.numNodes)

        // Calls predict api passing in rbg values, num of hidden layers, num of nodes
        var myParams = {
            //data: selectedColour
            redValue: colourRedValue,
            greenValue: colourGreenValue,
            blueValue: colourBlueValue,
            numHiddenLayers: location.state.numHiddenLayers,
            numNodes: location.state.numNodes,
        }

        // may need to update this to also check if train button has hit
        if (selectedColour !== ""){
            axios.post('http://localhost:3000/predict', myParams)
                .then(function(response){
                    console.log(response);
                    // response.data atm returns the string class number
                    setPredictionClassNum(response.data)
                })
                .catch(function(error){
                    console.log(error);
                });
        } else {
            alert("No colour selected to test")
        }

        // TODO: change/set node weights
    }

    return (
        <div>
            <section className="container neural-network">
                <div className="row">
                    
                    <h1>Train and test the neural network</h1>

                    {/* Neural network visual - need to find how to draw shapes etc 
                            TODO: link this to backend - test button, node sizes, strength fills up,
                    */}
                    <div className="row">
                        {/* test circle: onClick change it to a random color */}
                        <div className="col-xs-1">
                            <button id="test-button" onClick={handleClick}>
                                <i className="glyphicon glyphicon-eye-open"></i>
                            </button>
                        </div>

                        {/* 1st layer will always be 3: RGB */}
                        <div className="col-lg-8" >
                            <div className="col-xs-3">
                                <div className="main-container">
                                    <div className="layer-node-container">
                                        <Node size={60} color="white" /> 
                                        <Node size={60} color="white" /> 
                                        <Node size={60} color="white" /> 
                                    </div>
                                </div>
                            </div>

                            {/* TODO: change size to node size change This is not the best way to do this but whatever */}
                            {/* 1 layer, 2 nodes */} 
                            {location.state.numHiddenLayers === 1 && location.state.numNodes === 2 &&
                            <div className="col-xs-8">
                                <div className="main-container">
                                    <div className="layer-node-container">
                                        <Node size={60} color="grey" /> 
                                        <Node size={60} color="grey" /> 
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
                                                <Node size={60} color="grey"/> 
                                                <Node size={60} color="grey"/> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-4">
                                        <div className="main-container">
                                            <div className="layer-node-container">
                                                <Node size={60} color="grey" /> 
                                                <Node size={60} color="grey" /> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }


                            {/* 3 layer, 2 nodes */} 
                            {location.state.numHiddenLayers === 3 && location.state.numNodes === 2 &&
                                <div>
                                    <div className="col-xs-3">
                                        <div className="main-container">
                                            <div className="layer-node-container">
                                                <Node size={60} color="grey" /> 
                                                <Node size={60} color="grey" /> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-3">
                                        <div className="main-container">
                                            <div className="layer-node-container">
                                                <Node size={60} color="grey" /> 
                                                <Node size={60} color="grey" /> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-3">
                                        <div className="main-container">
                                            <div className="layer-node-container">
                                                <Node size={60} color="grey" /> 
                                                <Node size={60} color="grey" /> 
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
                                        <Node size={60} color="grey" /> 
                                        <Node size={60} color="grey" /> 
                                        <Node size={60} color="grey" /> 
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
                                                <Node size={60} color="grey" /> 
                                                <Node size={60} color="grey"/> 
                                                <Node size={60} color="grey" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-4">
                                        <div className="main-container">
                                            <div className="layer-node-container">
                                                <Node size={60} color="grey" /> 
                                                <Node size={60} color="grey"/> 
                                                <Node size={60} color="grey" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }

                            {/* 3 layer, 3 nodes */} 
                            {location.state.numHiddenLayers === 3 && location.state.numNodes === 3 &&
                                <div>
                                    <div className="col-xs-3" >
                                        <div className="main-container" >
                                            <div className="layer-node-container">
                                                <Node size={60} color="grey" /> 
                                                <Node size={60} color="grey"/> 
                                                <Node size={60} color="grey" /> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-3">
                                        <div className="main-container">
                                            <div className="layer-node-container">
                                                <Node size={60} color="grey" /> 
                                                <Node size={60} color="grey" /> 
                                                <Node size={60} color="grey" /> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-3">
                                        <div className="main-container">
                                            <div className="layer-node-container">
                                                <Node size={60} color="grey" /> 
                                                <Node size={60} color="grey" /> 
                                                <Node size={60} color="grey" /> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                            {/* 1 layer, 4 nodes */} 
                            {location.state.numHiddenLayers === 1 && location.state.numNodes === 4 &&
                            <div className="col-xs-8">
                                <div className="main-container">
                                    <div className="layer-node-container">
                                        <Node size={60} color="grey" /> 
                                        <Node size={60} color="grey" /> 
                                        <Node size={60} color="grey" /> 
                                        <Node size={60} color="grey" /> 
                                    </div>
                                </div>
                            </div>
                            }

                            {/* 2 layer, 4 nodes */} 
                            {location.state.numHiddenLayers === 2 && location.state.numNodes === 4 &&
                                <div>
                                    <div className="col-xs-4">
                                        <div className="main-container">
                                            <div className="layer-node-container">
                                                <Node size={60} color="grey" /> 
                                                <Node size={60} color="grey"/> 
                                                <Node size={60} color="grey" />
                                                <Node size={60} color="grey" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-4">
                                        <div className="main-container">
                                            <div className="layer-node-container">
                                                <Node size={60} color="grey" /> 
                                                <Node size={60} color="grey"/> 
                                                <Node size={60} color="grey" />
                                                <Node size={60} color="grey" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }

                            {/* 3 layer, 4 nodes */} 
                            {location.state.numHiddenLayers === 3 && location.state.numNodes === 4 &&
                                <div>
                                    <div className="col-xs-3" >
                                        <div className="main-container" >
                                            <div className="layer-node-container">
                                                <Node size={60} color="grey" /> 
                                                <Node size={60} color="grey"/> 
                                                <Node size={60} color="grey" /> 
                                                <Node size={60} color="grey" /> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-3">
                                        <div className="main-container">
                                            <div className="layer-node-container">
                                                <Node size={60} color="grey" /> 
                                                <Node size={60} color="grey" /> 
                                                <Node size={60} color="grey" /> 
                                                <Node size={60} color="grey" /> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-3">
                                        <div className="main-container">
                                            <div className="layer-node-container">
                                                <Node size={60} color="grey" /> 
                                                <Node size={60} color="grey" /> 
                                                <Node size={60} color="grey" /> 
                                                <Node size={60} color="grey" /> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                            </div>

                        {/* TODO: connect to backend, idea: give it an id and set it to what we need it to be later (diff size etc) */ }
                        {/* last layer will always be 7: the rainbow*/}
                        <div className="col-xs-2">
                            <div className="main-container">
                                <div className="layer-node-container">
                                    <Node size={60} color={rainbowColours[0]} /> 
                                    <Node size={60} color={rainbowColours[1]} /> 
                                    <Node size={60} color={rainbowColours[2]}/>
                                    <Node size={60} color={rainbowColours[3]}/> 
                                    <Node size={60} color={rainbowColours[4]} /> 
                                    <Node size={60} color={rainbowColours[5]} /> 
                                    <Node size={60} color={rainbowColours[6]} />  
                                </div>
                            </div>
                        </div>

                        {/* TODO: strength circle: pass in conf % to pct, change color to what it predicts it as? or leave as is with % */}
                        <div className="col-xs-1">
                            <Circle pct={100} size={100} color={predictedColour} />
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
                            <p className="colours-taught-text">{modelTrainedText}</p>
                        </div>
                    </div>

                     <div className="colour-selected-div" style={{background: colourHex}}>
                        <h1>Colour Selected: {colourName}. Red - {colourRedValue}, Green: {colourGreenValue} , Blue: {colourBlueValue} </h1>
                    </div>

                    <div className="select-colour-container">
                        <div className="row">
                            <h1>Test the neural network by selecting a colour ({colourData.length} colours)</h1>
                            <p>Click the test (eye) button above after you have selected a colour</p>
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