import React from 'react'

import {CreateCard} from '../components/card';
import neuralInstructionCards from '../assets/mock-data/neural-network-instructions';


function NeuralNetwork() {
    return (
        <div>
            <div className="header-text-container">
                <img className="neural-header-image" src={require('../assets/images/unravel.png')} alt="neural header"/>
                <h1 className="bottom-left">Unravelling the neural-network</h1>
            </div>
            <section className="container neural-network">
                <div className="row">
                    <h2>We have build a neural-network to ..</h2>
                    <p>Instructions: Train a neural network to recognise a colour by clicking a card below </p>
                    <CreateCard data={neuralInstructionCards} columns={2}/>
                </div>
            </section>  
        </div>
    )
}

export default NeuralNetwork;