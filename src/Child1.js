const Child1 = ({cards}) => {
  console.log(cards)
  return ( 
    <div>
      Hi from Child1!
      {cards ? cards.map(card=>
        <div><img src={card.image} alt="tarot card" width={250} height={400}/></div>): null}
    </div>
   );
}
 
export default Child1;