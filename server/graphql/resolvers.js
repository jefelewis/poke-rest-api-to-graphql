// Imports: Node Fetch
import axios from 'axios';


// Query Parameters
let limit = 20;


// GraphQL: Resolvers
const RESOLVERS = {
  Query: {
    getPokemonById: (parent, args) => {
      return axios.get(`http://pokeapi.co/api/v2/pokemon/${args.id}`)
      .then(response => response.data)
      .catch((error) => console.log(error))
    },
    getAllPokemon:  (parent, args) => {
      return axios.get(`https://pokeapi.co/api/v2/pokemon/`)
      .then(response => response.data)
      .catch((error) => console.log(error))
    }
  }
};


// Exports
export default RESOLVERS;