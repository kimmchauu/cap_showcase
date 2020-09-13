import React from 'react'

function AboutUs() {
    return (
        <div>
            <img className="about-us-image" src={require('../assets/images/thejourneyison.jpg')} alt="about us"/>
            <section className="container">

                {/* Need to build this out - won't take long*/}
                <div className="row">
                    <div className="col-xs-3">
                        <img className="jackie-image" src={require('../assets/images/jackie.png')} alt="jackie"/>
                    </div>
                    <div className="col-xs-9">
                        <h1 className="name-next-to-image">JACKIE MORAN</h1>
                        <p> Background/Description placeholder</p>
                        <p> Projects placeholder</p>
                        <p> Certs/W@CG/OutFront/CoP placeholder</p>
                    </div>
                </div>

                <div className="divider-line"></div>

                <div className="row">
                    <div className="col-xs-9">
                        <h1 className="name-next-to-image">KIM CHAU</h1>
                        <p> Background/Description placeholder</p>
                        <p> Projects placeholder</p>
                        <p> Certs/W@CG/CoP placeholder</p>
                    </div>
                    <div className="col-xs-3">
                        <img className="kim-image" src={require('../assets/images/kimchau.png')} alt="kim"/>
                    </div>
                </div>

            </section>  

            <div className="end-page-black-block"></div>
        </div>
    )
}

export default AboutUs;