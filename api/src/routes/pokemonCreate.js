const { Router } = require("express")
const router = Router()
const { createPokemon } = require("../Controllers/createPokemons")

router.post("/pokemons", async (req, res) => {

    try {

        let { name, hp, attack, defense, speed, height, weight, types, image, createdInDb } = req.body
        
        let pokeCreate = await createPokemon(name, hp, attack, defense, speed, height, weight, image, types, createdInDb)

        return res.status(200).json(pokeCreate)
    
    } catch(error) {
        return res.status(400).json(error)
    }
})

module.exports = router;