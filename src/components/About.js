import React from 'react'

const About = () => {
    return (
        <div className="container">
            <div className="about-title-container my-3 text-center">
                <div className="about-title">
                    <h1>Movie Search App</h1>
                </div>
            </div>
            <div className="about-container text-center">
                <div className="about-info">
                    <p>This Movie Search App was created as a practice project using the following:</p>
                    <ul>
                        <li className="list-info">React Router Dom</li>
                        <li className="list-info">Axios</li>
                        <li className="list-info">Bootstrap</li>
                        <li className="list-info">React Hooks</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
