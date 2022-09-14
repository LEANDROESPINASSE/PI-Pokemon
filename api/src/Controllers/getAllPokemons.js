const axios = require("axios")
const { Pokemon, Type } = require("../db")

async function getAllPokemons() {

    const apiFirstCall = await axios.get("https://pokeapi.co/api/v2/pokemon")
    const resFirstCall = await apiFirstCall.data.results.map(poke => {return axios.get(poke.url)})

    const apiSecondCall = await axios.get(apiFirstCall.data.next)
    const resSecondCall = await apiSecondCall.data.results.map(poke => {return axios.get(poke.url)})

    const allPokemon = [...resFirstCall,...resSecondCall]
    
    const promiseRes = await Promise.all(allPokemon)

    const pokeData = promiseRes.map(ele => {
        return {
            id: ele.data.id,
            name: ele.data.name,
            image: ele.data.sprites.other.dream_world.front_default,
            attack: ele.data.stats[1].base_stat,
            types: ele.data.types.map(ele => ele.type.name),
            createdInDb: false
        }
    })

    let dbCall = await Pokemon.findAll({
        attributes: [ "name", "image", "id", "attack", "createdInDb" ],
        include: {
            model: Type,
            attributes: [ "name" ],
            through: {
                attributes: [],
            }
        }
    })

    dbCall = dbCall.map(e => {
        return {
            ...e.dataValues,
            types: e.types?.map(e => e.name)
        }
    })

    let allData = [...dbCall, ...pokeData]

    return allData
}

module.exports = {
    getAllPokemons
}