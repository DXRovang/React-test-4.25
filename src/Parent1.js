import React from 'react'
import Child1 from './Child1'
import { fetchCards } from './actions/fetchCards'
import { connect } from 'react-redux'

class Parent1 extends React.Component{

  componentDidMount(){
    this.props.fetchCards
  }

  render(){
    return(
      <div>
        Hello from Parent1
        <Child1 cards={this.props.cards}/>
      </div>
    )

    const mapStateToProps = (state) =>{
      return {
        cards: state.cards
      }
    }
  }
}
export default connect(mapStateToProps, {fetchCards})(Parent1)