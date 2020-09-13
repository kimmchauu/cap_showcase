import React from 'react'

import {CreateCard} from '../components/card';
import neuralInstructionCards from '../assets/mock-data/neural-network-instructions';


function NeuralNetwork() {
    return (
        <div>
            <section className="container neural-network">
                <div className="row">
                    <h1>Unravelling the neural-network</h1>
                    <h2>We have build a neural-network to ..</h2>
                    <p>Instructions: Train a neural network to recognise a colour by clicking a card below </p>
                    <CreateCard data={neuralInstructionCards} columns={2}/>
                </div>
            </section>  
        </div>
    )
}

export default NeuralNetwork;