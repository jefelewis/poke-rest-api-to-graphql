// Imports: Node Fetch
import axios from 'axios';


// Query Parameters
let limit = 20;


// GraphQL: Resolvers
const RESOLVERS = {
  Query: {
    getPokemonByID: (parent, args) => {
      return axios.get(`http://pokeapi.co/api/v2/pokemon/${args.id}`)
      .then(response => response.data)
      .catch((error) => console.log(error))
    },
    getAllPokemon:  (parent, args) => {
      return axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}?offset=${offset}`)
      .then(response => response.data)
      .catch((error) => console.log(error))
    }
  }
};

// Exports
export default RESOLVERS;