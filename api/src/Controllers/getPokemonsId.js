const axios = require('axios');
const { Pokemon, Type } = require("../db")

async function getPokemonById(id){

	if(id.length > 5){

		try {
		const pokeDb = await Pokemon.findByPk(id, {include:Type});

		return pokeDb.dataValues;

	} catch(error) {
		throw new Error("The Pokemon does not exist") 
	}

	} else {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const pokeApi = await axios.get(url);

	// const pokeApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

	const pokemonData = {
			id: pokeApi.data.id,
			name: pokeApi.data.name,
			hp: pokeApi.data.stats[0].base_stat,
			attack: pokeApi.data.stats[1].base_stat,
			defense: pokeApi.data.stats[2].base_stat,
			speed: pokeApi.data.stats[3].base_stat,
			height: pokeApi.data.height,
			weight: pokeApi.data.weight,
			image: pokeApi.data.sprites.other.dream_world.front_default,
			types: pokeApi.data.types.map(p => p.type)
		}
		
	return pokemonData;
	}
}

module.exports = {
    getPokemonById,
}