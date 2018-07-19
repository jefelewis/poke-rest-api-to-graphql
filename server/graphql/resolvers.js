// Imports: Node Fetch
import axios from 'axios';


// GraphQL: Resolvers
const RESOLVERS = {
  Query: {
    getPokemonByID: (parent, args) => {
      return axios.get(`http://pokeapi.co/api/v2/pokemon/${args.id}`)
      .then(response => response.data)
      .catch(function (error) {
        // Handle Error
        console.log(error);
      })
    },
    getAllPokemon:  (parent, args) => {
      return axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=20`)
      .then(response => response.data)
      .catch(function (error) {
        // Handle Error
        console.log(error);
      })
    }
  }
};

// Exports
export default RESOLVERS;