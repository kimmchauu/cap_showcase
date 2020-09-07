import React from 'react'

import {CardStructure} from './'


function CreateCard ({data, columns, tagsOnTop}){
    return (
        // repeat for total amount of columns, minmax min of 275px and max of 1fr (however big image can be and it will scale)
        <section className="create-card" style={{gridTemplateColumns: `repeat(${columns}, minmax(275px, 1fr))`}}>
            {data.map((item, index) =>
                //  ... is short hand to pass props into a component (google REACT props). Instead of passing props through, you can destructor it using ... and then just pass variables to it e.g.
                <CardStructure {...{item, index, tagsOnTop, key:index}}/>
            )}
        </section>
    )
}


export default CreateCard;