import React, {useState} from 'react';
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
    // {
    //     title: 'Contact Us',
    //     path: '/contact-us',
    // },
    {
        title: 'Neural Network',
        path: '/neural-network',
    },
]

// this builds out our navigation bar using html and js
function Navigation () {
    // useState lets you have a variable and set it, use this for creating a side nav bar when the screen is too small
    const [sideMenuActive, setSideMenuActive] = useState(false)


    return (
        <nav className="site-navigation">
            {/* title */}
            <span className="nav-title"> Insights and Data Showcase </span>
            {/*Change to jsx so we can pass js in here, use templating syntax. If true then return active so we can */}
            <div className={`nav-content-container ${sideMenuActive && 'active'}`}>
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
            </div>
            {/*first 2 classes tells it is an ionicon font, ion-ios-menu tells the style (ionicons.com) */}
            {/* Add event listener onClick, to setMenuActive to !menuActive, i.e if it's true it will set to false, if false set to true */ }
            <i className="ionicons icon ion-ios-menu" onClick={() => setSideMenuActive(!sideMenuActive)}/>
        </nav>
    )
}

export default Navigation;