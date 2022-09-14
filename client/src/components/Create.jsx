import React from "react"
import { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getPokemonType, postPokemon } from "../redux/actions"
import "../Styles/Create.css"

export default function Create(){
    const dispatch = useDispatch()
    const history = useHistory()
    const [ errors, setErrors ] = useState({})
    const types = useSelector((state) => state.types)
    const poke = useSelector((state) => state.pokemons)
    const [ input, setInput ] = useState({
        name:"",
        hp:"",
        attack:"",
        defense:"",
        speed:"",
        weight:"",
        height:"",
        image:"",
        types:[]
    })

    function validation(input) {

        let errors = {}
        const valiName = new RegExp(/^[A-Za-z\s]+$/g)

        if (poke.find(e => e.name===input.name.toLowerCase())) {
            errors.name = "That pokemons name already exists"

        } else if (!input.name) {
            errors.name = "The Pokemon must have name"
        
        } else if(!valiName.test(input.name)) {
            errors.name = "The name of the Pokemon must be in letters"

        } else if (input.hp == 0 || input.hp.length == 0 || input.hp < 0) {
            errors.hp = "The Health of the Pokemon must be more than 0"

        } else if (input.attack == 0 || input.attack.length == 0 || input.attack < 0) {
            errors.attack = "The Attack of the Pokemon must be more than 0"

        } else if (input.defense == 0 || input.defense.length == 0 || input.defense < 0) {
            errors.defense = "The Defense of the Pokemon must be more than 0"

        } else if (input.speed == 0 || input.speed.length == 0 || input.speed < 0) {
            errors.speed = "The Speed of the Pokemon must be more than 0"

        } else if (input.weight == 0 || input.weight.length == 0 || input.weight < 0) {
            errors.weight = "The Weight of the Pokemon must be more than 0"

        } else if (input.height == 0 || input.height.length == 0 || input.height < 0) {
            errors.height = "The Height of the Pokemon must be more than 0"

        } else if (input.types.length < 1) {
            errors.types = "You must choose at least one type"

        } else if (input.types.length > 2) {
            errors.types = "You cant choose more than two types"

        // } else if (!/(https?:\/\/.*\.(?:png))/i.test(input.image)) {
        //     errors.image = 'El formato de la imagen debe ser ".png".'           
        
        } return errors
    }

useEffect(() => {
    dispatch(getPokemonType())
}, [])

useEffect(() => {
    setErrors(validation(input))
},[input])

function handleChange(e) {
    console.log(input)
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
    setErrors(validation({
        ...input,
        [e.target.name] : e.target.value
    }))
}

function handleCheck(e) {
    console.log(input.types)
    let checked = e.target.checked
        if(checked) {
            setInput({
                ...input,
                types: [...input.types,e.target.value]
            })
        }
        if(!checked) {
            setInput({
                ...input,
                types: input.types.filter(ele=>ele!==e.target.value)
            })
        }
}

function handleSubmit(e) {
    e.preventDefault() 
    if(Object.keys(errors).length===0) {
        dispatch(postPokemon(input))
        setInput({
            name:"",
            hp:"",
            attack:"",
            defense:"",
            speed:"",
            height:"",
            weight:"",
            image:"",
            types:[], 
        })
        alert("The Pokemon was created successfully")
        history.push("/home")
    } else {
        alert("Complete the form correctly")
    }  
}



return (
    <div className="create">
        <h1 className="tittle">Create New Pokemon</h1>
            <form id="form" onSubmit={(e)=>handleSubmit(e)}>
        <div className="createpoke">
            <div>
                <div>
                    <label className="form1">Pokemon Name</label>
                    <input type="text" value={input.name} name="name" className="input" onChange={(e) => handleChange(e)} />
                    {errors.name && (
                        <p className="error">{errors.name}</p>
                    )}
                </div>

                <div>
                    <label className="form1">Pokemon Health</label>
                    <input type="number" value={input.hp} name="hp"  className="input" onChange={(e) => handleChange(e)} />
                    {errors.hp && (
                        <p className="error">{errors.hp}</p>
                    )}
                </div>

                <div>
                    <label className="form1">Pokemon Attack</label>
                    <input type="number" value={input.attack} name="attack" className="input" onChange={(e) => handleChange(e)} />
                    {errors.attack && (
                        <p className="error">{errors.attack}</p>
                    )}
                </div>

                <div>
                    <label className="form1">Pokemon Defense</label>
                    <input type="number" value={input.defense} name="defense" className="input" onChange={(e) => handleChange(e)} />
                    {errors.defense && (
                        <p className="error">{errors.defense}</p>
                    )}
                </div>

                <div>
                    <label className="form1">Pokemon Speed</label>
                    <input type="number" value={input.speed} name="speed" className="input" onChange={(e) => handleChange(e)} />
                    {errors.speed && (
                        <p className="error">{errors.speed}</p>
                    )}
                </div>

                <div>
                    <label className="form1">Pokemon Weight</label>
                    <input type="number" value={input.weight} name="weight" className="input" onChange={(e) => handleChange(e)} />
                    {errors.weight && (
                        <p className="error">{errors.weight}</p>
                    )}
                </div>

                <div>
                    <label className="form1">Pokemon Height</label>
                    <input type="number" value={input.height} name="height" className="input" onChange={(e) => handleChange(e)} />
                    {errors.height && (
                        <p className="error">{errors.height}</p>
                    )}
                </div>

                <div>
                    <label className="form1" >Upload an image for your Pokemon</label>
                    <input type="text" value={input.image} name="image" className="input" onChange={(e) => handleChange(e)} />
                    {errors.image && (
                        <p className="error">{errors.image}</p>
                    )}
                </div>

                <div>
                        <label className="form1">Choose Pokemon Type</label>
                            <div className="form1">
                            {types.map((a)=>{
                                return(
                                        <label className="check"><input className="box" type="checkbox" value={a.name} name={a.name} onChange={(e)=>handleCheck(e)} />{a.name}</label>
                                        )
                            })}
                            </div>
                    {errors.types&& (
                            <p className="form1">{errors.types}</p>
                    )}
                </div>

            </div>
                <Link to="/home"><button className="lettersB">Back</button></Link>
                <button type="submit" className="lettersB" >Create Pokemon</button>

        </div>
            </form>
    </div>
)
}