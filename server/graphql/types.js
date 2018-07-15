// GraphQL: TypeDefs
const TYPEDEFS = `
  type Query {
    getPokemon(id: Int!): Pokemon
  }

  type Pokemon {
    id: Int
    name: String
    height: Int
    abilities: [AbilityObj]
    stats: [StatObj]
  }

  type AbilityObj {
    slot: Int
    is_hidden: Boolean
    ability: Ability
  }

  type Ability {
    name: String
    url: String
  }

  type StatObj {
    effort: Int
    base_stat: Int
    stat: Stat
  }

  type Stat {
    name: String
    url: String
  }
`;


// Exports
export default TYPEDEFS;