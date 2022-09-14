import React from "react"
import "../Styles/Card.css"
import defaultImage from "../Images/defaultImage.gif"

export default function Card({name, image, types, id}) {
    
    return(

        <div className="card2" key={id}>
            <h3 className="name">{name.toUpperCase()}</h3>
                <img src={image ? image : defaultImage} alt={`${name}`} width="400em"/>
            <h5 className="text">TYPE {types.map(el=>
                types.length>1 ?` - ${el.charAt(0).toUpperCase()+el.slice(1)}`:`${el.charAt(0).toUpperCase()+el.slice(1)} `)}</h5>
        </div>

    )
}