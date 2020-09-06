import React from 'react';
import {Link} from 'react-router-dom';


// create navigation links for our top nav bar
const navLinks = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'About Us',
        path: '/about-us',
    },
    {
        title: 'Contact Us',
        path: '/contact-us',
    },
    {
        title: 'Neural Network',
        path: '/neural-network',
    },
]

// this builds out our navigation bar using html and js
function Navigation () {
    return (
        <nav className="site-navigation">
            {/* title */}
            <span> Insights and Data Showcase </span>
            <ul>
                {/* Break into jsx using "{}", use a func call map on the navLinks array, which allows us to loop through the array and return it */}
                {/* Looping through array, each time it iterates, we get that element and we get the index of that element */}
                { navLinks.map((link, index) => (
                    // need to tell what key it is, for react to re-render if it needs to, so if the index changes (something is added or removed) it will re-render new list
                    <li key={index}>
                        <Link to={link.path}>{link.title}</Link>
                    </li>
                ))
                }
            </ul>
        </nav>
    )
}

export default Navigation;