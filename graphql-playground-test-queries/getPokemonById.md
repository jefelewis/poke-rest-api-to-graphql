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