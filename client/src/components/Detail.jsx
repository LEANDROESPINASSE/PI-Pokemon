import React, { useEffect } from "react"
import {  Link, useHistory, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { pageClear, getPokemonDetail } from "../redux/actions"
import "../Styles/Detail.css"
import defaultImage from "../Images/defaultImage.gif"

export default function Detail() {

    const { id } = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPokemonDetail(id))
            return( () => {
                dispatch(pageClear())
            })
    },[dispatch])


const history = useHistory()
const pokemonDetail = useSelector((state) => state.detail)
// const handleDelete=(e) => {
//     let elimiText = "Are you triying to eliminate a Pokemon?"
//         if(window.confirm(elimiText) == true) {
//             dispatch(pokemonDelete(pokemonDetail.id))
//             alert("The pokemon was eliminated")
//             history.push("/home")
//         } else {
//             return null
//         }
// }

return (

    <div className="detail">
        <div className="detailContainer">

                <h2 className="detailName">{pokemonDetail.name}</h2>
                    {pokemonDetail.image ? (
                <div className="image">
                    <img src={pokemonDetail.image} alt="pokeImage" />
                </div>
                    ) : (
                <img src={defaultImage} alt="pokeImg" />
            )}

            <div className="wraper">
                <p>ID: {pokemonDetail.id}</p>
                <p>Health: {pokemonDetail.hp}</p>
                <p>Attack: {pokemonDetail.attack}</p>
                <p>Defense: {pokemonDetail.defense}</p>
                <p>Speed: {pokemonDetail.speed}</p>
                <p>Height: {pokemonDetail.height}</p>
                <p>Weight: {pokemonDetail.weight}</p>
                {/* <p>Types: {pokemonDetail.types.map(ele => ele[0].toUpperCase()+ele.slice(1)+" ")}</p> */}
            </div>
            {/* {pokemonDetail.createdInDb? <button className="deleteB" onClick={handleDelete}>Delete</button> : null} */}

        
        </div>
            <Link to="/home">
                <button className="buttonB">Back Home</button>
            </Link>
    </div>
)
}