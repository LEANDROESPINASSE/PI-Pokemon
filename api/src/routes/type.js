const { Router } = require("express")
const router = Router()
const { getDbTypes } = require("../Controllers/createPokemons")

router.get("/types", async (req, res) => {
    
    try {
        res.status(200).json(await getDbTypes())
    
    } catch(error) {
        res.status(404).send({message: "error getting pokemon types"})
    }
})

module.exports = router