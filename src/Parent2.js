import React from 'react'
import Child2 from './Child2'
import { fetchCharacters } from './actions/fetchCharacters'
import { connect } from 'react-redux'

class Parent2 extends React.Component{


  componentDidMount(){
    this.props.fetchCharacters()
    console.log("here in Parent2")
  }
  render(){
    return(
      <div>
        Hello from Parent2
        <Child2 characters={this.props.characters}/>
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  return {
    characters: state.characters
  }
}
export default connect(mapStateToProps, {fetchCharacters})(Parent2)