const axios = require("axios")
const { Pokemon, Type } = require("../db")

async function getPokemonByName(name){

	const dbPoke = await Pokemon.findOne({
			where: {
				name: name
			},
			include: Type
	})

	if(!dbPoke){
		
		const apiPoke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase().trim()}`);

		const dataByPokemon = {
				id: apiPoke.data.id,
				name: apiPoke.data.name,
				hp: apiPoke.data.stats[0].base_stat,
				attack: apiPoke.data.stats[1].base_stat,
				defense: apiPoke.data.stats[2].base_stat,
				height: apiPoke.data.height,
				weight: apiPoke.data.weight,
				speed: apiPoke.data.stats[3].base_stat,
				image: apiPoke.data.sprites.other['official-artwork'].front_default,
				types: apiPoke.data.types.map(p => p.type.name),
		}
			return dataByPokemon;
	}

	const dataPokemon = {
		id: dbPoke.dataValues.id,
		name: dbPoke.dataValues.name,
		hp: dbPoke.dataValues.hp,
		attack: dbPoke.dataValues.attack,
		defense: dbPoke.dataValues.defense,
		height: dbPoke.dataValues.height,
		weight: dbPoke.dataValues.weight,
		speed: dbPoke.dataValues.speed,
		image: dbPoke.dataValues.image,
		types: dbPoke.dataValues.types.map(p => p.dataValues.name),
	}

	return dataPokemon;
}

module.exports = {
    getPokemonByName
}