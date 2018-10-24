# GraphQL Pokemon API
A GraphQL version of the popular Pokémon REST API.

## Built With
* [Express](https://expressjs.com) - Web framework
* [GraphQL](https://graphql.org) - Query Language
* [Apollo Server 2](https://www.apollographql.com/docs/apollo-server) - GraphQL Server
* [Babel](https://babeljs.io) - Transpiler/Transcompiler

## Getting Started
**Install Dependencies:**
```
npm install
```

**Start the Server:**
```
npm run server
```

**Execute GraphQL Queries Here (Automatically Opens When Server Starts):**
```
http://localhost:4000/graphql
```

## Example Queries
**Get Pokemon by ID:**
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