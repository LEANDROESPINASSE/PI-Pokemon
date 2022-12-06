import React from "react"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import "../Styles/Home.css"
import { Link } from "react-router-dom";
import Card from "./Card"
import Pagination from "./Pagination"
import SearchBar from "./SearchBar"
import loading from "../Images/loading.gif"

import {
    getAllPokemon,
    getPokemonType,
    orderPokemonName,
    orderPokemonAttack,
    filterPokemon,
    filterPokemonCreate
} from "../redux/actions"

export default function Home() {

const dispatch = useDispatch()
const allPokemons = useSelector((state) => state.pokemons)
const [ order, setOrder ] = useState("")
const [ currentPage, setCurrent] = useState(1)
const [ pokemonsXPage, setPokemonsXPage ] = useState(12)
const lastPokemonIndex = currentPage*pokemonsXPage
const firstPokemonIndex = lastPokemonIndex - pokemonsXPage
const currentPokemons = allPokemons?.slice(firstPokemonIndex,lastPokemonIndex)
const types = useSelector((state) => state.types)

useEffect(() => {
    dispatch(getAllPokemon())
    dispatch(getPokemonType())
},[dispatch])

const pagination = (pageNumber) => {
    setCurrent(pageNumber)
}

const pageNumber = (number) => {
    if(number === currentPage){
    return true
    } return false
}

function handleClick(e) {
    e.preventDefault()
    dispatch(getAllPokemon())
    setCurrent(1)
}

function handleNameSort(e) {
    e.preventDefault()
    dispatch(orderPokemonName(e.target.value))
    setCurrent(1)
    setOrder(`Ordered ${e.target.value}`)
}

function handleAttackSort(e) {
    e.preventDefault()
    dispatch(orderPokemonAttack(e.target.value))
    setCurrent(1)
    setOrder(`Ordered ${e.target.value}`)
}
function handlefilterPokemon(e) {
    e.preventDefault()
    dispatch(filterPokemon(e.target.value))
    setCurrent(1)
    setOrder(`Ordered ${e.target.value}`)
}

function handlefilterPokemonCreated(e) {
    e.preventDefault()
    dispatch(filterPokemonCreate(e.target.value))
    setOrder(`Ordered ${e.target.vale}`)
}

return (

    <div className="home1">

        <div className="contenedor">

            <nav className="homeBar">

                <div className="first">
                    <div className="inline">
                        <Link to="/">
                            <button className="button1" onClick={(e) => handleClick(e)}>Home</button>
                        </Link>
                    </div>
                    
                    <div className="inline">
                        <Link to="/create">
                            <button className="button1">Create Pokemon</button>
                        </Link>
                    </div>
                    <div className="inline">
                        <Link to="/about">
                            <button className="button1">About</button>
                        </Link>
                    </div>
                </div>

            </nav>

            <div className="search">
                <SearchBar setCurrent={setCurrent}/> 
            </div>

        <div className="first1">

            <div className="inline1">
            <label className="label">Alpahabet
                <select className="filter" onChange={e => handleNameSort(e)}>
                    <option value="none">None</option>
                    <option value="a-z">a-z</option>
                    <option value="z-a">z-a</option>
                </select>
            </label>
            </div>

            <div className="inline1">
            <label className="label">Attack
                <select className="filter" onChange={e => handleAttackSort(e)}>
                    <option value="attack">attack</option>
                    <option value="max">max</option>
                    <option value="min">min</option>
                </select>
            </label>
            </div>

            <div className="inline1">
            <label className="label">Type Selector
                <select className="filter" onChange={e => handlefilterPokemon(e)}>
                    <option value="all">All</option>
                        {types.map(ele=>{
                            return(
                                <option value={ele.name}>{ele.name}</option>
                            )
                        })}
                </select>
            </label>
            </div>
            
            <div className="inline1">
            <label className="label">From
                <select className="filter" onChange={e => handlefilterPokemonCreated(e)}>
                    <option value="all">All</option>
                    <option value="created">Pokemons from Db</option>
                    <option value="api">Pokemons from Api</option>
                </select>
            </label>
            </div>

        </div>

                    <div className="cardc">
                    {currentPokemons.length!==0?currentPokemons.map(el => {
                        return(
                            <div className="card1">
                            <Link key={el.id} to={"/details/" + el.id}>
                                <Card name={el.name} image={el.image} types={el.types} />
                            </Link>
                            </div>
                        )
                    }):
                        <div>
                            <img src={loading} width="1100px"/>
                        </div>
                }
                    </div>

                <Pagination
                    pokemonsXPage = {pokemonsXPage}
                    allPokemons = {allPokemons.length}
                    pagination = {pagination}
                    pageNumber={pageNumber}             
                />                
        </div>
    </div>
)
}