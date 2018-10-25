# GraphQL Pokemon API

*  [About The Data](#about-the-data)
*  [Built With](#built-with)
*  [Getting Started](#getting-started)
*  [GraphQL Query Examples](#graphql-query-examples)

## About The Data
The data comes directly from the popular [Pokemon REST API](https://pokeapi.co). The REST endpoints have been mapped as GraphQL types and resolvers. A summary of endpoints and documentation can be found here: https://pokeapi.co/docs/v2.html/#pokemon-section

- No API Key required.
- PokeAPI has a request limit of 100 requests per minute.

## Built With
* [Node.js](https://nodejs.org/en) - JavaScript Runtime Environment
* [Express](https://expressjs.com) - Web framework
* [GraphQL](https://graphql.org) - Query Language
* [Apollo Server 2](https://www.apollographql.com/docs/apollo-server) - GraphQL Server
* [Babel](https://babeljs.io) - Transpiler/Transcompiler

## Getting Started
**Install Dependencies:**
```
npm install
```

**Start Server:**
```
npm run server
```

**Execute GraphQL Queries Here (Browser Automatically Opens On Server Start):**
```
http://localhost:4000/graphql
```

## GraphQL Query Examples
**Get Pokemon By ID:**
```
{
  getPokemonById(id: 1) {
    id
    name
    height
    is_default
    order
    weight
    abilities {
      slot
      is_hidden
      ability {
        name
        url
      }
    }
    held_items
    location_area_encounters
    moves{
      move {
        name
        url
      }
    }
    species {
      name
      url
    }
    stats {
      base_stat
      effort
      stat {
        name 
        url
      }
    }
    types {
      slot
      type {
        name
        url
      }
    }
  }
}
```

**Get All Pokemon:**
```
{
  getAllPokemon() {
    results {
      name
      url
    }
  }
}
```