// Imports: Node Fetch
const fetch = require('node-fetch');


// GraphQL: Resolvers
const RESOLVERS = {
  Query: {
    getPokemonByID: async (parent, args) => {
      const response = await 
      fetch(`http://pokeapi.co/api/v2/pokemon/${args.id}`);
      return response.json();
    },
    getAllPokemon: async (parent, args) => {
      const response = await 
      fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20`);
      return response.json();
    }
  }
};

// Exports
export default RESOLVERS;