// Imports: Node Fetch
const fetch = require('node-fetch');

// Imports: API URL
const apiURL = `http://pokeapi.co/api/v2/`;


// GraphQL: Resolvers
const RESOLVERS = {
  Query: {
    getPokemon: async (parent, args) => {
      const response = await 
      fetch(`http://pokeapi.co/api/v2/pokemon/${args.id}`);
      return response.json();
    }
  }
};

// Exports
export default RESOLVERS;