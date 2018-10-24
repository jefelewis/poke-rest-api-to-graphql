// Imports: GraphQL
import { gql } from 'apollo-server-express';


// GraphQL: TypeDefs
const TYPEDEFS = gql`

  type Query {
    getPokemonById(id: Int): Pokemon
    getAllPokemon: AllPokemon
  }

  type AllPokemon {
    count: Int
    previous: String
    results: [AllPokemonElement]
    next: String
  }

  type AllPokemonElement {
    url: String
    name: String
  }

  type Pokemon {
    id: Int
    name: String
    height: Int
    is_default: Boolean
    order: Int
    weight: String
    abilities: [Abilities]
    held_items: String
    location_area_encounters: String
    moves: [Moves]
    species: [Species]
    stats: [Stats]
    types: [Types]
  }

  type Abilities {
    is_hidden: Boolean
    slot: Int
    ability: Ability
  }

  type Ability {
    name: String
    url: String
  }

  type Forms {
    name: String
    url: String
  }

  type GameIndecies {
    game_index: String
    version: Version
  }

  type Version {
    name: String
    url: String
  }

  type Moves {
    move: Move
    version_group_details: [VersionGroupDetails]
  }

  type Move {
    name: String
    url: String
  }

  type VersionGroupDetails {
    level_learned_at: Int
    version_group: [VersionGroup]
    move_learned_method: [MoveLearnedMethod]
  }

  type VersionGroup {
    name: String
    url: String
  }

  type MoveLearnedMethod {
    name: String
    url: String
  }

  type Species {
    name: String
    url: String
  }

  type Stats {
    base_stat: Int
    effort: Int
    stat: [Stat]
  }

  type Stat {
    name: String
    url: String
  }

  type Types {
    slot: Int
    type: [Type]
  }

  type Type {
    name: String
    url: String
  }
`;


// Exports
export default TYPEDEFS;