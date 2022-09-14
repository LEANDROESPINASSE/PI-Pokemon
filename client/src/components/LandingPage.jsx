import React from "react"
import { Link } from "react-router-dom"
import "../Styles/LandingPage.css"
import pokeball from "../Images/pokeball.png"


export default function LandingPage() {
    return (
        <div className="landing">

                <h3 className="tittle">Pokemon APP</h3>
                <Link to="/home">
                    <button className="btn" >
                        <img src={pokeball} alt="pokeball" width={400} />
                    </button>
                </Link>

        </div>
    )
}