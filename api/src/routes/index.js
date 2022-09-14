const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const pokemon = require("./pokemon")
const pokemonId = require("./pokemonId")
const pokemonCreate = require("./pokemonCreate")
const type = require("./type")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/", pokemon)
router.use("/", pokemonId)
router.use("/", pokemonCreate)
router.use("/", type)

module.exports = router;
