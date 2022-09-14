const { Router } = require("express")
const router = Router()
const { getPokemonById } = require("../Controllers/getPokemonsId")

router.get("/pokemons/:id", async (req, res) => {
    
    let {id} = req.params
    
    try {
        return res.status(200).json(await getPokemonById(id))
    
    }catch(error) {
        return res.status(404).json(message= "error getting id")
    }
})

module.exports = router;