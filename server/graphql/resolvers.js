// Imports: MongoDB Models/Schema

// Imports: Node Fetch
const fetch = require('node-fetch');

// Imports: apiURL
const baseURL = `https://swapi.co/api/`;


// GraphQL: Resolvers
const RESOLVERS = {
  // Query: {
  //   person: (parent, args) => {
  //     const { id } = args // Remove it and make it args.id
  //     return fetch(`${baseURL}/people/${id}`).then(res => res.json())
  //   }
  // }
};


// Exports
export default RESOLVERS;