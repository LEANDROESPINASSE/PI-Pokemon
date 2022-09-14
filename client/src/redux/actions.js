import axios from "axios"

//---------------------------- RUTAS ------------------------------

const RUTA_GET_POKEMON = "http://localhost:3001/pokemons";
const GET_POKEMON_DETAIL = "http://localhost:3001/pokemons/";
const RUTA_GET_TYPE = "http://localhost:3001/types";
const RUTA_POST = "http://localhost:3001/pokemons";
const RUTA_GET_NAME = "http://localhost:3001/pokemons?name="

//------------------------ RENDER/HOME ------------------------------

export function getAllPokemon() {
    return async function(dispatch) {
        try {
            let allPoke = await axios.get(RUTA_GET_POKEMON)
            console.log(allPoke)
            return dispatch({
                type: "GET_ALL_POKEMON",
                payload: allPoke.data
            })           
        }catch(error){
            alert("Error getting all pokemon", error)
        }
    } 
}

// export function getPokemonDetail(id) {
//     return async function(dispatch) {
//         try {
//             let detailPoke = axios.get(`${GET_POKEMON_DETAIL}${id}`)
//             return dispatch({
//                 type: "GET_POKEMON_DETAIL",
//                 payload: detailPoke.data
//             })
//         } catch(error) {
//             alert("Error getting pokemon detail", error)
//         }
//     }
// }

export function getPokemonDetail(id){
    return (dispatch)=>{
            axios.get(`${GET_POKEMON_DETAIL}${id}`)
                .then((json) => dispatch({type: "GET_POKEMON_DETAIL", payload:json.data}))
                .catch((error)=>{window.alert("Error getting pokemon detail", error)})
    }
}

// export function getPokemonType() {
//     return async function(dispatch) {
//         try {
//             let typePoke = axios.get(RUTA_GET_TYPE)
//             return dispatch({
//                 type: "GET_POKEMON_TYPE",
//                 payload: typePoke.data
//             })
//         } catch(error) {
//             alert("Error getting pokemon type", error)
//         }
//     }
// }

export function getPokemonType(){
    return async function(dispatch){
        try{
            let json = await axios.get(RUTA_GET_TYPE)
            return dispatch({
                type: "GET_POKEMON_TYPE",
                payload: json.data
            })
        }catch(error){
            window.alert("Error getting pokemon detail", error)
        }
    }
}

export function postPokemon(payload) {
    return async function(dispatch) {
        try {
            console.log(payload)
            let createPoke = axios.post(RUTA_POST, payload)
            return dispatch({
                type: "POST_POKEMON",
                payload: createPoke.data
            })
        } catch(error) {
            console.log(error)
            // alert("Error creating a new Pokemon", error)
        }
    }
}

export function getPokemonName(name) {
    return async function(dispatch) {
        try {
            let namePoke = await axios.get(`${RUTA_GET_NAME}${name}`)
            return dispatch({
                type: "GET_POKEMON_NAME",
                payload: namePoke.data
            })     
        } catch(error) {
            alert("Error getting that Pokemon", error)
        }
    }
}

// export function getPokemonName(name){
//     return async function(dispatch){
//         try{
//             let json = await axios.get(`${RUTA_GET_NAME}${name}`)
//             let array=[]
//             array.push(json.data)
//             return dispatch({
//                 type: "GET_POKEMON_NAME",
//                 payload: array
//             })
//         }catch(error){
//             window.alert("Error getting that Pokemon", error)
//         }
//     }
// }

export function orderPokemonName(payload) {
    return {
        type: "ORDER_POKEMON_NAME",
        payload
    }
}

export function orderPokemonAttack(payload) {
    return {
        type: "ORDER_POKEMON_ATTACK",
        payload
    }
}

export function filterPokemon(payload) {
    console.log(payload)
    return {
        type: "FILTER_POKEMON",
        payload
    }
}

export function filterPokemonCreate(payload) {
    return {
        type: "FILTER_POKEMON_CREATE",
        payload
    }
}

export function pageClear() {
    return {
        type: "CLEAR_PAGE"
    }
}


