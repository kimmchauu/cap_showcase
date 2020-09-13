import React from 'react'
import {useRouteMatch} from 'react-router-dom'


// generates the page which is called in PageRenderer() - passes page as first parameter, make function to look into
const generatePage = page => {

    // try-catch incase there is no page to import
    try {
        // `` is templating syntax - google it
        const Component = require(`./pages/${page}`).default
        return <Component />;
    } catch (err) {
        console.warn(err)
        return <React.Fragment>404</React.Fragment>
    }
}


function PageRenderer() {
    // this is the parameter that was passed into PageRenderer (into the router) in App.js
    const {
        // uses react hook called useRouteMatch
        params: {page}
    } = useRouteMatch()

    return generatePage(page)
}

export default PageRenderer;