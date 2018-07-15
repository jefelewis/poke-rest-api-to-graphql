// GraphQL: TypeDefs
const TYPEDEFS = `
  type Query {
    film(id: ID): Film
    films: [Film]
    person(id: ID): Person
    persons: [Person]
    planet(id: ID): Planet
    planets: [Planet]
    species(id: ID): Species
    specieses: [Species]
    starship(id: ID): Starship
    starships: [Starship]
    vehicle(id: ID): Vehicle
    vehicles: [Vehicle]
  }


  type Film {
    id: ID!
    title: String!
    episode_id: Int!
    opening_crawl: String
    director: String
    producer: String
    release_date: String
    species: [Species]
    starships: [Starship]
    vehicles: [Vehicle]
    characters: [Person]
    planets: [Planet]
    url: String
    created: String
    edited: String
  }
`


// Exports
export default TYPEDEFS;