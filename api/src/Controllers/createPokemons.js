const axios = require("axios");
const { Pokemon, Type } = require("../db");

async function getPokemonInApi(name) {

    try {
        let apiCall = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase().trim()}`);
        if (apiCall) return true;
    } catch(error) {
        return false
    }
}   

async function createPokemon(
  name,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  image,
  types
) {
  
  if (name) {
    let pokeInDb = await Pokemon.findOne({
      where: {
        name: name.toLowerCase().trim(),
      },
    });

    if (await getPokemonInApi(name))
      throw new Error("The Pokemon already exist");
    else if (pokeInDb) throw new Error("The Pokemon already exist");
    else {
      let createPoke = await Pokemon.create({
        name: name.toLowerCase().trim(),
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        image: image.length ? image : "https://assets.stickpng.com/images/5a0596df9cf05203c4b60445.png",
        createdInDb: true
      });

      let dbType = await Type.findAll({
        where: { name: types },
      });

      createPoke.addType(dbType);
      return "The pokemon has been created successfully";
    }
  } else {
    return "Must put a name for the Pokemon";
  }
}

async function getDbTypes() {
  let dbType = await Type.findAll();

  if (dbType.length === 0) {
    let apiCall = await axios.get("https://pokeapi.co/api/v2/type");
    let apiType = apiCall.data.results.map((poke) => {
      return { name: poke.name };
    });
    dbType = await Type.bulkCreate(apiType);
  }
  return dbType;
}

module.exports = {
  createPokemon,
  getDbTypes,
};
