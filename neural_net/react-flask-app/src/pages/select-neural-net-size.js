import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'


function SelectNeuralNetSize(props) {
    // need this to get data from previous page
    const location = useLocation(); 
    const [hiddenLayers, setHiddenLayers] = useState(1); // 1 hidden layer as default
    const [nodes, setNodes] = useState(2);


    const incrementLayers = () => {
        if (hiddenLayers < 3 ){
            setHiddenLayers(hiddenLayers + 1);
        }
    }
    const decrementLayers = () => {
        if (hiddenLayers > 1 ){
            setHiddenLayers(hiddenLayers - 1);
        }
    }

    const incrementNodes = () => {
        if (nodes < 3 ){
            setNodes(nodes + 1);
        }
    }
    const decrementNodes = () => {
        if (nodes > 2 ){
            setNodes(nodes - 1);
        }
    }

    // useEffect is triggered whenever the depedencies are changed (hiddenLayers, nodes)
    useEffect(() => {
        // based on the dependencies (hiddenLayers, nodes), show the correct image
        if (hiddenLayers === 1){
            if (nodes === 2){
                document.getElementById("neural-net-size-image").src = require("../assets/images/1layer_2nodes.png");
            } else if (nodes === 3){
                document.getElementById("neural-net-size-image").src = require("../assets/images/1layer_3nodes.png");
            } 
        } else if (hiddenLayers === 2) {
            if (nodes === 2){
                document.getElementById("neural-net-size-image").src = require("../assets/images/2layers_2nodes.png");
            } else if (nodes === 3){
                document.getElementById("neural-net-size-image").src = require("../assets/images/2layers_3nodes.png");
            }
        }else if (hiddenLayers === 3) {
            if (nodes === 2){
                document.getElementById("neural-net-size-image").src = require("../assets/images/3layers_2nodes.png");
            } else if (nodes === 3){
                document.getElementById("neural-net-size-image").src = require("../assets/images/3layers_3nodes.png");
            } 
        }
    }, [hiddenLayers, nodes])

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
                    <div className="colour-selected-div" style={{background: location.state.colourSelected["Hex (24 bit)"]}}>
                        <h1>Colour Selected: {location.state.colourSelected.Name}. Red - {location.state.colourSelected["Red (8 bit)"]}, Green: {location.state.colourSelected["Green (8 bit)"]} , Blue: {location.state.colourSelected["Blue (8 bit)"]} </h1>
                    </div>
                    <h1>Select a Neural Network Size</h1>

                    {/*  + - buttons for hidden layers and nodes per hidden layer  */}
                    <div className="row">
                        <div className="col-xs-1">
                            <button className="plus-minus-button" onClick={incrementLayers}>
                                <i class="glyphicon glyphicon-plus"></i>
                            </button>
                        </div>
                        <div className="col-xs-1">
                            <button className="plus-minus-button" onClick={decrementLayers} >
                                <i class="glyphicon glyphicon-minus"></i>
                            </button>
                        </div>
                        <div className="col-xs-4">
                            <p className="hidden-layers-title">{hiddenLayers} hidden layers (1-3)</p>
                        </div>
                        <div className="col-xs-1">
                            <button className="plus-minus-button" onClick={incrementNodes}>
                                <i class="glyphicon glyphicon-plus"></i>
                            </button>
                        </div>
                        <div className="col-xs-1">
                            <button className="plus-minus-button" onClick={decrementNodes} >
                                <i class="glyphicon glyphicon-minus"></i>
                            </button>
                        </div>
                        <div className="col-xs-4">
                            <p className="hidden-layers-title">{nodes} nodes per hidden layer (2-3)</p>
                        </div>
                    </div>

                    {/* Shows the neural net size based user selection */}
                    <div className="row">
                        <img id="neural-net-size-image" src={require('../assets/images/1layer_2nodes.png')} alt="neural net size"/>
                    </div>
                </div>
            </section>  
        </div>
    )
}

export default SelectNeuralNetSize;