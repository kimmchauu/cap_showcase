import React from 'react';

import {CreateCard} from '../components/card';
import homeCardsData from '../assets/mock-data/home-cards';


// Configures the grid for the cards
const cardConfig = {
    // this is the 2nd element in the array
    // this is how we can individually define where inside of the grid the element should be
    0: {
        // this is a css property 
        // think of sections as line, this says:
        // column to start on 1, end at 2. Row to start at 1 and end at 3rd line
        gridArea: '1 / 1 / 2 / 3'
    },
    3: {
        gridArea: '3 / 1 / 3 / 3'
    }

}
const mergeStyles = function (data, config) {
    data.forEach((item, index) => {
        // merge our styles with our mock data
        item.style = config[index]
    })
}
mergeStyles(homeCardsData, cardConfig)


// Builds out the Home page
// for now it just shows how we can use page containers and css grids to lay out UI components
function Home() {
    return (
        <div>
            <section className="container home">
                <div className="row">
                    <h1>What you can find (click on any card to find out more)</h1>
                    <CreateCard data={homeCardsData} columns={2}/>
                </div>
            </section>
        </div>
    )
}

export default Home;