export function fetchCharacters() {
  // return () =>{

  return (dispatch) =>{
    fetch('https://rickandmortyapi.com/api/character')
    .then(r=>r.json())
    // .then(characters=>console.log(characters))
    .then(characters=>dispatch({
      type: "FETCH_CHARACTERS",
      payload: characters
    })
    )
  }
}