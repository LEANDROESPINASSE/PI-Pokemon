const { Router } = require("express")
const router = Router()
const { getAllPokemons } = require("../Controllers/getAllPokemons") 
const { getPokemonByName } = require("../Controllers/getPokemonsName")


router.get('/pokemons', async ( req, res ) => {

    try {
        let { name } = req.query;

		if(name){
			return res.status(200).json(await getPokemonByName(name));
		}else{
			return res.status(201).json(await getAllPokemons());
		}
	
    } catch(error) {
		return res.status(404).json({error:'The pokemon you are trying to find does not exist'});
	}
})

module.exports = router
