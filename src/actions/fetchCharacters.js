export function fetchCharacters() {
  return (dispatch) =>{
    fetch('https://rickandmortyapi.com/api/character')
    .then(r=>r.json())
    .then(cards=>dispatch({
      type: "FETCH_CHARACTERS",
      payload: cards.sort((a,b)=>a.id - b.id)
    }))
  }
}