
const initialState = {

    pokemons: [],
    allPokemons: [],
    detail: {},
    types: []

}

const rootReducer = (state = initialState, action) => {

    switch(action.type) {

        case "GET_ALL_POKEMON":

            return {
                ...state,
                pokemons: [...action.payload],
                allPokemons: [...action.payload]
            }

        case "GET_POKEMON_NAME":

            return {
                ...state,
                pokemons: [...action.payload]
            }

        case "GET_POKEMON_TYPE":

            return {
                ...state,
                types: action.payload
            }

        case "ORDER_POKEMON_NAME":

            let pokeSort = action.payload === "a-z" ? state.pokemons.sort(function(a,b) {
                    
                if(a.name > b.name) {
                    return 1;
                }
                if(b.name > a.name) {
                    return -1
                } return 0

            }) : state.pokemons.sort(function(a,b) {
                if(a.name > b.name) {
                    return -1
                }
                if(b.name > a.name) {
                    return 1
                } return 0
            })
                return {
                    ...state,
                    pokemons: pokeSort
                }

        case "FILTER_POKEMON":

            const pokeFilter = state.allPokemons
            const typeFilter = action.payload ==="all"? pokeFilter:pokeFilter.filter(e=>e.types[0]===action.payload || e.types[1]===action.payload)
                return {
                    ...state,
                    pokemons: typeFilter
                }
            
        case "FILTER_POKEMON_CREATE":

            const pokeCreate = state.allPokemons
            const filterCreated = action.payload === "created" ? pokeCreate.filter(ele => ele.createdInDb) : pokeCreate.filter(el => !el.createdInDb)
                return {
                    ...state,
                    pokemons: action.payload === "all"? pokeCreate:filterCreated
                }

        case "ORDER_POKEMON_ATTACK":

            const attackSort = action.payload === "max" ? state.pokemons.sort(function(a,b){
                return b.attack - a.attack
            }) : state.pokemons.sort(function(a,b) {
                return a.attack - b.attack
            })
            return {
                ...state,
                pokemons: attackSort
            }

        case "GET_POKEMON_DETAIL":

            return {
                ...state,
                detail: action.payload
            }

        case "POST_POKEMON":

            return {
                ...state,
            }
            
        case "CLEAR_PAGE":

            return {
                ...state,
                detail: {}
            }

        default: 
        
            return {
                ...state
            }
    }
}

export default rootReducer