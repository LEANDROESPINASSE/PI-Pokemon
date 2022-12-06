import React from "react";
import { Link } from "react-router-dom"
import "../Styles/About.css"

export default function About() {
    return (
        <div className="aboutback">
            <Link to="/home">
                <button className="about">Back Home</button>
            </Link>
            <a href="https://www.linkedin.com/in/leandro-espinasse/">
                <button className="about">My LinkedIn profile</button>
            </a>
            <a href="https://github.com/LEANDROESPINASSE">
                <button className="about">My GitHub profile</button>
            </a>
            <h5 className="text">
                <p>
                This project is a Simple Web Application, witch allows you to search pokemons 
            by attack, sizes, health furthermore a creation of a new Pokemon.
            </p>
                A project where i can demostrate Back-End and Front-End skills. Some of the tools
            i use in this projects are:
            </h5>
                <div className="text">
                    <h3>Data Base:</h3>
                    <li>PostgresSQL</li> 
                    <li>Sequelize</li> 
                </div>
                <div className="text">
                    <h3>Back-End:</h3>
                    <li>Node</li>
                    <li>Express</li>
                </div>
                <div className="text">
                    <h3>Front-End:</h3>
                    <li>React</li>
                    <li>Redux</li>
                </div>
        </div>
    )
}