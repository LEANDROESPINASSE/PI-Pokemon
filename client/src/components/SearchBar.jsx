import React from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { getPokemonName } from "../redux/actions"
import "../Styles/SearchBar.css"
import pokeball from "../Images/pokeball.png"

export default function SearchBar({setCurrent}) {
    
    const [ name, setName ] = useState("")
    const dispatch = useDispatch()

    function handleinput(e) {
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
            if(name.length!==0) {
                dispatch(getPokemonName(name))
                setName("")
                setCurrent(1)
            } else {
                alert("must put a name to search")
            }
    }

    return(
        <div className="search">
            <input 
            className="search__input"
            type="text"
            placeholder="Poke Search" 
            value={name} 
            onChange={(e) => handleinput(e)}
            />
            <img src={pokeball} alt="pokeball" 
                className="search__icon"
                type="submit"
                onClick={(e)=>handleSubmit(e)}/> 
        </div>

    )
}

