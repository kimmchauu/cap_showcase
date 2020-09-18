import React from 'react'

function AboutUs() {
    return (
        <div>
            <img className="about-us-image" src={require('../assets/images/thejourneyison.jpg')} alt="about us"/>
            <section className="container">

                {/* Need to build this out - won't take long*/}
                <div className="row">
                    <div className="col-xs-3">
                        <img className="jackie-image" src={require('../assets/images/jackie_moran.png')} alt="jackie"/>
                    </div>
                    <div className="col-xs-9">
                        <h1 className="name-next-to-image">JACKIE MORAN (They/Them)</h1>
                        <p>Jackie is an Associate Consultant at Capgemini, a Physics graduate with a passion for the environment and social change. They are driven to contribute to climate action and improve the equity of  society through novel applications of data science and innovative business solutions. </p>
                        <br></br>
                        <p>They have developed a wealth of experience using machine learning techniques such as Natural Language Processing and Object Detection through their experiences and work. 
Alongside data science skills such as machine learning, Jackie has learnt how end to end products are developed and has gained proficiency in skills such as API development and client delivery. Upskilling in Python, FastAPI, Docker, AWS and Agile. </p>
                        <p> Jackie is an active participant of Women@Capgemini, OUTfront - Capgemini’s diversity and LGBT+ action group - and a co-creator of the Community of Practise for sustainable business AU - a community for sustainably minded employees of Capgemini. </p>
                    </div>
                </div>

                <div className="divider-line"></div>

                <div className="row">
                    <div className="col-xs-9">
                        <h1 className="name-next-to-image">KIM CHAU (She/Her)</h1>
                        <p>Associate Consultant at Capgemini</p>
                        <p>Bachelor of Software Engineering with Honours at the University of Adelaide. </p>
                        <br></br>
                        <p>Kim started with Capgemini in early February.</p>
                        <p>She has worked on developing model monitoring endpoints, helping the development of the ensemble model for document classification, developing the monitoring dashboard, and additional tasks to help accelerate the road map. Now, Kim is helping develop a service catalogue using REACT. She has up-skilled in Python, Flask, Plotly, Docker, AWS, REACT and Scrum.</p>
                        <p> She is in the process of obtaining her PSMI certification and AI Cadet. She has also been helping W@CG and the Sustainability CoP.
</p>
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