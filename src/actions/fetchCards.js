export function fetchCards() {
  // debugger
  // return () =>{
  return (dispatch) =>{
    console.log("here in fetchCards")
    fetch('http://127.0.0.1:3000/api/v1/cards')
    .then(r=>r.json())
    .then(cards=>
      // console.log(cards)
      dispatch({
      type: "FETCH_CARDS",
      payload: cards.sort((a,b)=>a.id - b.id)
    })
    )
  }
}
 
