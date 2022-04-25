

const Child2 = ({characters}) => {
console.log(characters)
  return ( 
    <div>
       Hi from Child1!
      {characters.results.map(character=>
        <div><img src={character.image}/></div>)}
    </div>
   );
}
 
export default Child2;