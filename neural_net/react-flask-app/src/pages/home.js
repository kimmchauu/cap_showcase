import React from 'react';

import {CreateCard} from '../components/card';
import homeCardsData from '../assets/mock-data/home-cards';

// Builds out the Home page
// for now it just shows how we can use page containers and css grids to lay out UI components
function Home() {
    return (
        <div>
            <section className="container home">
                <div className="row">
                    <h1>What you can find</h1>
                    <CreateCard data={homeCardsData} columns={2}/>
                </div>
            </section>
        </div>
    )
}

export default Home;