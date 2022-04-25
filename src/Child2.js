

const Child2 = ({characters}) => {

  return ( 
    <div>
       Hi from Child2!
      {characters ? characters.results.map(character=>
        <div><img alt="rick and morty" src={character.image}/></div>): null}
    </div>
   );
}
 
export default Child2;